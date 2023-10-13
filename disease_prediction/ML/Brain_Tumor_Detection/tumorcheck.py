import cv2
from PIL import Image  # Add this line to import the Image module

# Load the image
image = cv2.imread("../../uploads/pred7.jpg")
if image is None:
    print("Image not loaded. Check the file path.")
image_fromarray = Image.fromarray(image, 'RGB')

# Continue with the rest of your code...

resize_image = image_fromarray.resize((224, 224))
expand_input = np.expand_dims(resize_image,axis=0)
input_data = np.array(expand_input)
input_data = input_data/255

prediction = loaded_model.predict(input_data)
if (prediction < 0.5):
  answer = "\nNhi h Tumorrrrr, Bach gya Saale"
else:
  answer="\nHai bhai, Marjaaaaaaaaaa"

# print("Probability: ", round(prediction[0][0],3))
percentage = round(prediction[0][0]*100)
print(f"Chance of Tumor: {percentage}%")
