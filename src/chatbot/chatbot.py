import numpy as np
import tensorflow as tf
from tensorflow import keras
import re
import pandas as pd
from tqdm import tqdm
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
from tensorflow.keras.layers import Embedding, LSTM, Dense, Input
from tensorflow.keras.models import Model
from flask import Flask, request, jsonify
import pickle

# TPU Setup
try:
    tpu = tf.distribute.cluster_resolver.TPUClusterResolver()
    tf.config.experimental_connect_to_cluster(tpu)
    tf.tpu.experimental.initialize_tpu_system(tpu)
    strategy = tf.distribute.TPUStrategy(tpu)
    print('Device:', tpu.master())
except ValueError:
    strategy = tf.distribute.get_strategy()
print('Number of replicas:', strategy.num_replicas_in_sync)

# Configuration Parameters
BATCH_SIZE = 32
EPOCHS = 20
LATENT_DIM = 512
NUM_SAMPLES = 50000

# Load Dataset
df = pd.read_csv(r'C:\Users\yara\Northine\src\chatbot\data\dataset.csv', encoding='utf-8')

# Preprocessing Function
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[\n\-:",]', ' ', text)  # Replace unwanted characters
    text = re.sub(r'[.!?;:]', ' ', text)   # Remove punctuation
    text = re.sub(r'\s+', ' ', text).strip()  # Remove extra spaces
    return text

# Apply Preprocessing
df['instruction'] = df['instruction'].apply(clean_text)
df['response'] = df['response'].apply(clean_text)

# Generate Input-Output Pairs
input_texts, target_texts = [], []
input_vocab, target_vocab = set(), set()

for idx in tqdm(range(len(df))):
    input_text = df.iloc[idx]['instruction']
    target_text = df.iloc[idx]['response']
    
    # Filter conditions
    if 2 < len(input_text.split()) < 30 and 0 < len(target_text.split()) < 10:
        target_text = f"bos {target_text} eos"  # Add start and end tokens

        input_texts.append(input_text)
        target_texts.append(target_text)

        input_vocab.update(input_text.split())
        target_vocab.update(target_text.split())

print(f"Total Input-Target Pairs: {len(input_texts)}")
print(f"Input Vocabulary Size: {len(input_vocab)}")
print(f"Target Vocabulary Size: {len(target_vocab)}")

# Tokenize Input and Target Texts
input_tokenizer = Tokenizer()
input_tokenizer.fit_on_texts(input_texts)
input_sequences = input_tokenizer.texts_to_sequences(input_texts)
input_vocab_size = len(input_tokenizer.word_index) + 1

target_tokenizer = Tokenizer()
target_tokenizer.fit_on_texts(target_texts)
target_sequences = target_tokenizer.texts_to_sequences(target_texts)
target_vocab_size = len(target_tokenizer.word_index) + 1

# Padding Sequences
max_input_len = max(len(seq) for seq in input_sequences)
max_target_len = max(len(seq) for seq in target_sequences)

# Pad input sequences
input_sequences = pad_sequences(input_sequences, maxlen=max_input_len, padding='post')

# Pad target sequences
target_sequences = pad_sequences(target_sequences, maxlen=max_target_len, padding='post')

# Train-Test Split
input_train, input_val, target_train, target_val = train_test_split(
    input_sequences, target_sequences, test_size=0.2, random_state=42
)

# Reshape Target Data for Model Training
target_train = target_train.reshape(target_train.shape[0], target_train.shape[1], 1)
target_val = target_val.reshape(target_val.shape[0], target_val.shape[1], 1)

# Model Definition
# Encoder
encoder_inputs = Input(shape=(max_input_len,))
encoder_embedding = Embedding(input_vocab_size, LATENT_DIM)(encoder_inputs)
encoder_lstm, state_h, state_c = LSTM(LATENT_DIM, return_state=True)(encoder_embedding)
# Decoder
decoder_inputs = Input(shape=(max_target_len,))
decoder_embedding = Embedding(target_vocab_size, LATENT_DIM)(decoder_inputs)
decoder_lstm = LSTM(LATENT_DIM, return_sequences=True, return_state=True)
decoder_outputs, _, _ = decoder_lstm(decoder_embedding, initial_state=[state_h, state_c])
decoder_dense = Dense(target_vocab_size, activation='softmax')
decoder_outputs = decoder_dense(decoder_outputs)

# Compile Model
model = Model([encoder_inputs, decoder_inputs], decoder_outputs)
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.summary()

# Train the Model
history = model.fit(
    [input_train, target_train[:, :-1]],  # Use all but the last target token for input
    target_train[:, 1:],  # Use all but the first target token for output
    batch_size=BATCH_SIZE,
    epochs=EPOCHS,
    validation_data=([input_val, target_val[:, :-1]], target_val[:, 1:])
)

# Save Model and Tokenizers
model.save("chatbot_model.h5")
with open("input_tokenizer.pkl", "wb") as f:
    pickle.dump(input_tokenizer, f)
with open("target_tokenizer.pkl", "wb") as f:
    pickle.dump(target_tokenizer, f)

# Encoder Model for Inference
encoder_model = Model(encoder_inputs, [state_h, state_c])

# Decoder Model for Inference
decoder_state_input_h = Input(shape=(LATENT_DIM,))
decoder_state_input_c = Input(shape=(LATENT_DIM,))
decoder_states_inputs = [decoder_state_input_h, decoder_state_input_c]
decoder_lstm_outputs, state_h, state_c = decoder_lstm(
    decoder_embedding, initial_state=decoder_states_inputs
)
decoder_states = [state_h, state_c]
decoder_outputs = decoder_dense(decoder_lstm_outputs)
decoder_model = Model(
    [decoder_inputs] + decoder_states_inputs, [decoder_outputs] + decoder_states
)

# Response Generation Function
def decode_sequence(input_seq):
    states_value = encoder_model.predict(input_seq)
    target_seq = np.zeros((1, 1))
    target_seq[0, 0] = target_tokenizer.word_index["bos"]

    decoded_sentence = ""
    stop_condition = False

    while not stop_condition:
        output_tokens, h, c = decoder_model.predict([target_seq] + states_value)
        sampled_token_index = np.argmax(output_tokens[0, -1, :])
        sampled_word = target_tokenizer.index_word[sampled_token_index]

        if sampled_word == "eos" or len(decoded_sentence.split()) > max_target_len:
            stop_condition = True
        else:
            decoded_sentence += " " + sampled_word

        target_seq[0, 0] = sampled_token_index
        states_value = [h, c]

    return decoded_sentence

# Flask Web Service
app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json['message']
    input_seq = input_tokenizer.texts_to_sequences([clean_text(user_message)])
    input_seq = pad_sequences(input_seq, maxlen=max_input_len, padding='post')
    
    response = decode_sequence(input_seq)
    return jsonify({'response': response.strip()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
