import numpy as np
import tensorflow as tf
from tensorflow import keras
import string
import pandas as pd
from tqdm import tqdm
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
from tensorflow.keras.layers import Embedding, LSTM, Dense, Input
from tensorflow.keras.models import Model

# TPU Setup
try:
    tpu = tf.distribute.cluster_resolver.TPUClusterResolver()
    tf.config.experimental_connect_to_cluster(tpu)
    tf.tpu.experimental.initialize_tpu_system(tpu)
    strategy = tf.distribute.experimental.TPUStrategy(tpu)
    print('Device:', tpu.master())
except:
    strategy = tf.distribute.get_strategy()
print('Number of replicas:', strategy.num_replicas_in_sync)

# Configuration Parameters
AUTOTUNE = tf.data.AUTOTUNE
BATCH_SIZE = 64
EPOCHS = 200
LATENT_DIM = 512
NUM_SAMPLES = 50000

# Load Dataset
df = pd.read_csv('C:\Users\yara\Northine\src\chatbot\data\Bitext_Sample_Customer_Support_Training_Dataset_27K_responses-v11.csv')

# Preprocessing Function
def clean_text(text):
    text = text.lower()
    text = re.sub(r'[\n\-:,"]', ' ', text)  # Replace unwanted characters
    text = re.sub(r'[.!?;:]', ' ', text)       # Remove punctuation
    text = re.sub(r'\s+', ' ', text).strip()  # Remove extra spaces
    return text

# Apply Preprocessing
df['message'] = df['message'].apply(clean_text)

# Initialize Data Lists and Word Sets
input_texts, target_texts = [], []
input_vocab, target_vocab = set(), set()

# Generate Input-Output Pairs
for idx in tqdm(range(1, len(df))):
    if df.iloc[idx - 1]['conversation_id'] == df.iloc[idx]['conversation_id']:
        input_text, target_text = df.iloc[idx - 1]['message'], df.iloc[idx]['message']

        # Filter conditions
        if 2 < len(input_text.split()) < 30 and 0 < len(target_text.split()) < 10:
            target_text = f"bos {target_text} eos"

            input_texts.append(input_text)
            target_texts.append(target_text)

            input_vocab.update(input_text.split())
            target_vocab.update(target_text.split())

print(f"Total Input-Target Pairs: {len(input_texts)}")
print(f"Input Vocabulary Size: {len(input_vocab)}")
print(f"Target Vocabulary Size: {len(target_vocab)}")

# Tokenizing the input texts
input_tokenizer = Tokenizer()
input_tokenizer.fit_on_texts(input_texts)
input_sequences = input_tokenizer.texts_to_sequences(input_texts)
input_vocab_size = len(input_tokenizer.word_index) + 1

# Tokenizing the target texts
target_tokenizer = Tokenizer()
target_tokenizer.fit_on_texts(target_texts)
target_sequences = target_tokenizer.texts_to_sequences(target_texts)
target_vocab_size = len(target_tokenizer.word_index) + 1

# Padding sequences
max_input_len = max(len(seq) for seq in input_sequences)
max_target_len = max(len(seq) for seq in target_sequences)

input_sequences = pad_sequences(input_sequences, maxlen=max_input_len, padding='post')
target_sequences = pad_sequences(target_sequences, maxlen=max_target_len, padding='post')

input_train, input_val, target_train, target_val = train_test_split(
    input_sequences, target_sequences, test_size=0.2, random_state=42
)
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

# Define the model
model = Model([encoder_inputs, decoder_inputs], decoder_outputs)

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.summary()
#Data Preparation for Training
#Reshape the target data for the decoder.
target_train = target_train.reshape(target_train.shape[0], target_train.shape[1], 1)
target_train = target_train.reshape(target_train.shape[0], target_train.shape[1], 1)
target_val = target_val.reshape(target_val.shape[0], target_val.shape[1], 1)
#Model Training
#Train the model using the prepared data

BATCH_SIZE = 32  # Start with 32
EPOCHS = 20      # Start with 20 epochs and adjust as needed

history = model.fit(
    [input_train, target_train[:, :-1]], 
    target_train[:, 1:], 
    batch_size=BATCH_SIZE, 
    epochs=EPOCHS, 
    validation_data=([input_val, target_val[:, :-1]], target_val[:, 1:])
)