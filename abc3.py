import cv2
from PIL import Image
import os
import tensorflow as tf
import requests
import numpy as np
import pandas as pd
from tensorflow.keras.preprocessing import image
from keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.metrics import categorical_crossentropy
from keras.models import Sequential, Model
from keras.layers import Conv2D, MaxPooling2D,GlobalAveragePooling2D
from keras.layers import Activation, Dropout, BatchNormalization, Flatten, Dense, AvgPool2D,MaxPool2D
from keras.models import Sequential, Model
from keras.optimizers import Adam
from io import BytesIO 
model_path = os.path.abspath('./disease_prediction/Tumor_classifier_model.h5')

try:
    loaded_model = tf.keras.models.load_model(model_path)
    # print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {str(e)}")

# model_path = os.path.join(subdir,filename)
# model_path = "Tumor_classifier_model.h5"
loaded_model = tf.keras.models.load_model(model_path)

# import matplotlib.pyplot as plt



image_url = "https://firebasestorage.googleapis.com/v0/b/easywash-2.appspot.com/o/arvind%40gmail.com%2FProfile?alt=media&token=029e30c1-b2f4-4375-8d32-12f8f4f3a230"
try:
    # Send a GET request to the URL and get the image content
    response = requests.get(image_url)
    
    if response.status_code == 200:
        image_bytes = Image.open(BytesIO(response.content))
        
        # Convert the PIL Image to a NumPy array
        image = np.array(image_bytes)
        
        image_fromarray = Image.fromarray(image, 'RGB')
        resize_image = image_fromarray.resize((224, 224))
        expand_input = np.expand_dims(resize_image, axis=0)
        input_data = np.array(expand_input)
        input_data = input_data / 255

        prediction = loaded_model.predict(input_data)
        if (prediction < 0.5):
            answer = "\nNhi h Tumorrrrr, Bach gya Saale"
        else:
            answer = "\nHai bhai, Marjaaaaaaaaaa"

        percentage = round(prediction[0][0] * 100)
        print(f"Chance of Tumor: {percentage}%")
    else:
        print("Failed to fetch the image from the URL. HTTP status code:", response.status_code)
except requests.exceptions.RequestException as e:
    print(f"An error occurred during the request: {str(e)}")
except Exception as e:
    print(f"An error occurred: {str(e)}")