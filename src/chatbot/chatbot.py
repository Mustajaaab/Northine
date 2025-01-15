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
import tkinter as tk
from tkinter import scrolledtext

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

# Adjust the target sequence length to match the expected input size
target_sequences = pad_sequences(target_sequences, maxlen=max_target_len, padding='post')

# Train-Test Split
input_train, input_val, target_train, target_val = train_test_split(
    input_sequences, target_sequences, test_size=0.2, random_state=42
)

# Reshape Target Data for Model Training
target_train = target_train.reshape(target_train.shape[0], target_train.shape[1], 1)
target_val = target_val.reshape(target_val.shape[0], target_val.shape[1], 1)

# Convert input and target data to NumPy arrays
input_train = np.array(input_train)
target_train = np.array(target_train)
input_val = np.array(input_val)
target_val = np.array(target_val)

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
model = Model(inputs=[encoder_inputs, decoder_inputs], outputs=decoder_outputs)
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the Model
model.fit([input_train, target_train], target_train, 
          batch_size=BATCH_SIZE, 
          epochs=EPOCHS, 
          validation_data=([input_val, target_val], target_val))

# Save the model
model.save('chatbot_model.h5')

# Function to process user input and provide chatbot response
def send_message():
    user_message = user_input.get()
    if user_message.strip() == "":
        return
    
    # Display user message in the chat window
    chat_window.configure(state="normal")
    chat_window.insert(tk.END, f"You: {user_message}\n")
    chat_window.configure(state="disabled")
    
    # Generate chatbot response
    chatbot_response = generate_response(user_message)
    chat_window.configure(state="normal")
    chat_window.insert(tk.END, f"Bot: {chatbot_response}\n\n")
    chat_window.configure(state="disabled")
    chat_window.see(tk.END)  # Auto-scroll to the bottom
    
    # Clear the input field
    user_input.delete(0, tk.END)

# Function to generate a chatbot response
def generate_response(message):
    # Preprocess the user message
    message = clean_text(message)
    message_seq = input_tokenizer.texts_to_sequences([message])
    message_seq = pad_sequences(message_seq, maxlen=max_input_len, padding='post')

    # Prepare the initial state for the decoder
    initial_state = [state_h, state_c]  # Use the last states from the encoder
    decoder_input = np.zeros((1, max_target_len))  # Start with a zero input for the decoder
    decoder_input[0, 0] = target_tokenizer.word_index['bos']  # Start with the 'bos' token

    # Generate response
    response = []
    for i in range(max_target_len):
        output_tokens = model.predict([message_seq, decoder_input])
        sampled_token_index = np.argmax(output_tokens[0, i, :])
        sampled_char = target_tokenizer.index_word.get(sampled_token_index, '')
        
        if sampled_char == 'eos':
            break
        
        response.append(sampled_char)
        decoder_input[0, i + 1] = sampled_token_index  # Update the decoder input

    return ' '.join(response)

# GUI Setup
root = tk.Tk()
root.title("Chatbot")
root.geometry("500x600")

# Chat display area
chat_window = scrolledtext.ScrolledText(root, wrap=tk.WORD, state="disabled", font=("Arial", 12))
chat_window.pack(padx=10, pady=10, fill=tk.BOTH, expand=True)

# User input field
user_input = tk.Entry(root, font=("Arial", 14))
user_input.pack(padx=10, pady=10, fill=tk.X, expand=False)

# Send button
send_button = tk.Button(root, text="Send", font=("Arial", 12), command=send_message)
send_button.pack(padx=10, pady=10)

# Start the GUI event loop
root.mainloop()