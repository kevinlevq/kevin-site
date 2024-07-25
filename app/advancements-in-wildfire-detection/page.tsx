import React from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import visData from "../images/Screenshot 2024-07-25 at 11.33.41 AM.png";
import prediction from "../images/Screenshot 2024-07-25 at 11.33.41 AM.png";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HeaderDisplay from "../header/page";

const codeString = `
def plot_images(directory, category, num_images):
    category_dir = os.path.join(directory, category)
    images = os.listdir(category_dir)[:num_images]
    
    plt.figure(figsize=(15, 5))
    for i, img_name in enumerate(images):
        img_path = os.path.join(category_dir, img_name)
        img = load_img(img_path, target_size=(img_height, img_width))
        img_array = img_to_array(img) / 255.0
        
        plt.subplot(1, num_images, i + 1)
        plt.imshow(img_array)
        plt.title(category)
        plt.axis('off')
    plt.show()

# Plotting 5 fire and 5 nofire images
plot_images(train_dir, 'nowildfire', 5)
plot_images(train_dir, 'wildfire', 5)
`;

const codeString2 = `
base_model = ResNet50V2(
    weights='imagenet', 
    include_top=False, 
    input_shape=(img_height, img_width, 3)
)

base_model.trainable = False

# Unfreeze the last few layers of the base model for fine-tuning
for layer in base_model.layers[-10:]:
    layer.trainable = True

# Add custom layers on top of the base model
x = base_model.output
x = GlobalAveragePooling2D()(x)
x = Dense(512, activation='relu')(x)
x = BatchNormalization()(x)
x = Dropout(0.5)(x)
x = Dense(256, activation='relu')(x)
x = BatchNormalization()(x)
x = Dropout(0.5)(x)
x = Dense(128, activation='relu')(x)
x = BatchNormalization()(x)
x = Dropout(0.5)(x)
output = Dense(1, activation='sigmoid')(x)

model = Model(inputs=base_model.input, outputs=output)

model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)
`;

const codeString3 = `
class PlotPredictionsCallback(tf.keras.callbacks.Callback):
    def __init__(self, valid_generator):
        self.valid_generator = valid_generator

    def on_epoch_end(self, epoch, logs=None):
        # Select a random image from the validation set
        valid_images, valid_labels = next(self.valid_generator)
        idx = np.random.randint(valid_images.shape[0])
        image = valid_images[idx]
        true_label = valid_labels[idx]

        # Predict the label
        prediction = self.model.predict(np.expand_dims(image, axis=0))[0][0]
        predicted_label = 'Fire' if prediction >= 0.5 else 'No Fire'
        true_label_text = 'Fire' if true_label == 1 else 'No Fire'

        # Plot the image with true and predicted labels
        plt.imshow(image)
        plt.title(f'True: {true_label_text}, Predicted: {predicted_label}')
        plt.axis('off')
        plt.show()
`;

const codeString4 = `
lr_scheduler = tf.keras.callbacks.ReduceLROnPlateau(
    monitor='val_loss',
    factor=0.1,
    patience=2,
    min_lr=1e-6
)

early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5, restore_best_weights=True)

plot_predictions = PlotPredictionsCallback(valid_generator)

history = model.fit(
    train_generator,
    epochs=50,
    validation_data=valid_generator,
    callbacks=[early_stopping, lr_scheduler, plot_predictions]
)
`;

const Post2 = () => {
  return (
    <div>
      <header>
        <HeaderDisplay />
      </header>
      <div
        style={{
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "left",
          minHeight: "5vh",
          padding: "0 20px",
          paddingLeft: "100px",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "60%",
            textAlign: "justify",
            marginTop: "90px", // Adjust this value as needed
          }}
        >
          <h1
            style={{
              textAlign: "left",
              fontSize: "40px",
              marginBottom: "20px",
            }}
          >
            <strong>
              Advancements in Wildfire Detection Using Satellite Imagery
            </strong>
          </h1>
          <div
            style={{
              fontSize: "16px",
              fontWeight: "400",
              height: "48px",
              lineHeight: "24px",
              marginBlockEnd: "16px",
              marginBlockStart: "0px",
              marginBottom: "16px",
              marginInlineEnd: "0px",
              marginInlineStart: "0px",
              marginTop: "0px",
              textAlign: "start",
              textSizeAdjust: "100%",
            }}
          >
            <p style={{ marginBottom: "32px", fontSize: "18px" }}>
              The advancements in wildfire detection using satellite imagery
              have significantly improved due to the integration of deep
              learning techniques and high-resolution satellite data. Modern
              systems employ convolutional neural networks (CNNs) for their
              ability to effectively process and analyze large sets of satellite
              images to identify potential wildfire occurrences.
            </p>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
              <strong>Data Loading and Cleaning</strong>
            </h1>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                src={visData}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              <strong>Data Visualization</strong>
            </h2>
            <p style={{ marginBottom: "16px" }}>
              We begin by plotting a sample of images from our dataset,
              categorized into &apos;wildfire&apos; and &apos;nowildfire&apos;:
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString}
            </SyntaxHighlighter>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <strong>Model Building</strong>{" "}
            </h2>
            <p style={{ marginBottom: "16px" }}>
              {" "}
              A ResNet50V2 model is utilized for its robust feature extraction
              capabilities. The model is fine-tuned by unfreezing the last few
              layers to adapt to the specific task of wildfire detection.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString2}
            </SyntaxHighlighter>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              <strong>Custom Callback for Visualizing Model Predictions</strong>
            </h2>
            <p>
              The PlotPredictionsCallback class is a custom component for
              TensorFlow/Keras models that visualizes how well the model is
              performing during training. At the end of each training epoch, it
              randomly selects an image from the validation set, predicts
              whether the image shows a fire or not, and then displays the image
              along with the true label and the model&apos;s predicted label.
              This provides a visual check on the model&apos;s accuracy and
              helps identify any potential issues or improvements needed in the
              model&apos;s predictions.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString3}
            </SyntaxHighlighter>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              <strong>Model Training</strong>
            </h2>
            <p>
              We make predictions on new reviews to demonstrate the model&apos;s
              ability to predict conditions and drugs based on text input.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString4}
            </SyntaxHighlighter>
            <div
              style={{
                width: "100%",
                maxWidth: "10000px",
                margin: "0 auto",
                marginTop: "20px",
                paddingBottom: "100px",
              }}
            >
              <Image
                src={prediction}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
