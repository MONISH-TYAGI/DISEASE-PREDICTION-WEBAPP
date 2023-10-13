import cv2
from PIL import Image
import os
import tensorflow as tf

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




image_path =  os.path.abspath('./disease_prediction/uploads/EXPERIMENT.jpg')
print(f"Image path: {image_path}")
try:
    
    image = cv2.imread(image_path)
    if image is None:
        print(f"Image not loaded. Check the file path: {image_path}")
    else:
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

        # print("Probability: ", round(prediction[0][0],3))
        percentage = round(prediction[0][0] * 100)
        print(f"Chance of Tumor: {percentage}%")

except Exception as e:
    print(f"An error occurred while loading the image: {str(e)}")
