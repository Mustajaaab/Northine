import numpy as np
import tensorflow as tf
from tensorflow import keras
import string
import pandas as pd
from tqdm import tqdm

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
df = pd.read_csv('../input/chatbot-dataset-topical-chat/topical_chat.csv')

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