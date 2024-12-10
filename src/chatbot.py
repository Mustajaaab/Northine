import numpy as np
import tensorflow as tf
from tensorflow import keras
import string, os 
import re
from tqdm import tqdm
import pandas as pd
import matplotlib.pyplot as plt
import pickle

try:
    tpu = tf.distribute.cluster_resolver.TPUClusterResolver()
    print('Device:', tpu.master())
    tf.config.experimental_connect_to_cluster(tpu)
    tf.tpu.experimental.initialize_tpu_system(tpu)
    strategy = tf.distribute.experimental.TPUStrategy(tpu)
except:
    strategy = tf.distribute.get_strategy()
print('Number of replicas:', strategy.num_replicas_in_sync)

AUTOTUNE = tf.data.experimental.AUTOTUNE
    
print(tf.__version__)

batch_size = 64  # Batch size for training.
epochs = 200  # Number of epochs to train for.
latent_dim = 512  # Latent dimensionality of the encoding space.
num_samples = 50000

# reading dataset
df = pd.read_csv('../input/chatbot-dataset-topical-chat/topical_chat.csv')
df.head()

# basic preprocessing
def process(text):
    text = text.lower().replace('\n', ' ').replace('-', ' ').replace(':', ' ').replace(',', '') \
          .replace('"', ' ').replace(".", " ").replace("!", " ").replace("?", " ").replace(";", " ").replace(":", " ")

    text = "".join(v for v in text if v not in string.punctuation).lower()
    #text = text.encode("utf8").decode("ascii",'ignore')

    text = " ".join(text.split())
    #text+="<eos>"
    return text

df.message = df.message.apply(process)

# Vectorize the data.
input_texts = []
target_texts = []
input_words_set = set()
target_words_set = set()

for conversation_index in tqdm(range(df.shape[0])):
    
    if conversation_index == 0:
        continue
        
    input_text = df.iloc[conversation_index - 1]
    target_text = df.iloc[conversation_index]
    
    if input_text.conversation_id == target_text.conversation_id:
        
        input_text = input_text.message
        target_text = target_text.message
        
        if len(input_text.split()) > 2 and \
            len(target_text.split()) > 0 and \
            len(input_text.split()) < 30 and \
            len(target_text.split()) < 10 and \
            input_text and \
            target_text:
            
            target_text = "bos " + target_text + " eos"
                
            input_texts.append(input_text)
            target_texts.append(target_text)
            
            for word in input_text.split():
                if word not in input_words_set:
                    input_words_set.add(word)
            for word in target_text.split():
                if word not in target_words_set:
                    target_words_set.add(word)
input_texts
target_texts
