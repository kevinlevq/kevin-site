import React from "react";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import data from "../images/Screenshot 2024-07-25 at 9.25.03 AM.png";
import chart from "../images/Screenshot 2024-07-25 at 9.58.16 AM.png";
import epoc from "../images/Screenshot 2024-07-25 at 10.09.49 AM.png";
import prediction from "../images/Screenshot 2024-07-25 at 10.14.48 AM.png";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HeaderDisplay from "../header/page";

const codeString = `
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import numpy as np

train_data['review_cleaned'] = train_data['review'].str.replace('[^a-zA-Z]', ' ').str.lower()

tokenizer = Tokenizer()
tokenizer.fit_on_texts(train_data['review_cleaned'])
sequences = tokenizer.texts_to_sequences(train_data['review_cleaned'])

max_sequence_length = max(len(x) for x in sequences)
X = pad_sequences(sequences, maxlen=max_sequence_length)

label_encoder_condition = LabelEncoder()
label_encoder_drug = LabelEncoder()

y_condition = label_encoder_condition.fit_transform(train_data['condition'])
y_drugName = label_encoder_drug.fit_transform(train_data['drugName'])
y_condition = pd.get_dummies(y_condition).values
y_drugName = pd.get_dummies(y_drugName).values
X_train, X_val, y_condition_train, y_condition_val, y_drugName_train, y_drugName_val = train_test_split(
    X, y_condition, y_drugName, test_size=0.2, random_state=42)

print(X_train.shape, y_condition_train.shape, y_drugName_train.shape)
`;

const codeString2 = `
import plotly.express as px

# Top 20 conditions by count
top_conditions = train_data['condition'].value_counts().head(20)
df_top_conditions = pd.DataFrame({'Condition': top_conditions.index, 'Count': top_conditions.values})
fig = px.bar(df_top_conditions, y='Condition', x='Count', orientation='h', title='Top 20 Conditions by Count', color='Count', color_continuous_scale='Viridis')
fig.update_layout(yaxis={'categoryorder':'total ascending'})
fig.show()

# Word cloud for drug names
from wordcloud import WordCloud, STOPWORDS
import matplotlib.pyplot as plt

stopwords = set(STOPWORDS)
wordcloud = WordCloud(background_color='black', stopwords=stopwords, max_words=200, max_font_size=100, scale=3, random_state=42, colormap='viridis', width=1200, height=800).generate(str(train_data['drugName']))
plt.rcParams['figure.figsize'] = (15, 15)
plt.title('Word Cloud - Drug Names', fontsize=20)
plt.axis('off')
plt.imshow(wordcloud)
plt.show()
`;

const codeString3 = `
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Embedding, LSTM, Dense

input_layer = Input(shape=(max_sequence_length,))
embedding_layer = Embedding(input_dim=len(tokenizer.word_index) + 1, output_dim=128)(input_layer)
lstm_layer = LSTM(64)(embedding_layer)
condition_output = Dense(len(label_encoder_condition.classes_), activation='softmax', name='condition_output')(lstm_layer)
drug_output = Dense(len(label_encoder_drug.classes_), activation='softmax', name='drug_output')(lstm_layer)
model = Model(inputs=input_layer, outputs=[condition_output, drug_output])
model.compile(optimizer='adam', 
              loss={'condition_output': 'categorical_crossentropy', 
                    'drug_output': 'categorical_crossentropy'}, 
              metrics={'condition_output': ['accuracy'], 
                       'drug_output': ['accuracy']})
history = model.fit(X_train, {'condition_output': y_condition_train, 'drug_output': y_drugName_train}, 
                    validation_data=(X_val, {'condition_output': y_condition_val, 'drug_output': y_drugName_val}), 
                    epochs=10, 
                    batch_size=128)
`;

const codeString4 = `
# New reviews to predict
new_reviews = ["It has no side effect, I take it in combination of Bystolic 5 Mg and Fish Oil", "Had terrible side effects with this drug"]

# Preprocess the new reviews
new_reviews_cleaned = [review.lower().replace('[^a-zA-Z]', ' ') for review in new_reviews]
new_sequences = tokenizer.texts_to_sequences(new_reviews_cleaned)
new_padded_sequences = pad_sequences(new_sequences, maxlen=max_sequence_length)

# Predict conditions and drugs
predictions = model.predict(new_padded_sequences)

predicted_conditions = [label_encoder_condition.classes_[np.argmax(pred)] for pred in predictions[0]]
predicted_drugs = [label_encoder_drug.classes_[np.argmax(pred)] for pred in predictions[1]]

# Display predictions
for i, review in enumerate(new_reviews):
    print(f"Review: {review}")
    print(f"Predicted Condition: {predicted_conditions[i]}, Predicted Drug: {predicted_drugs[i]}")
`;

const Post1 = () => {
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
          paddingBottom: "800px",
          boxSizing: "border-box",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            width: "60%",
            textAlign: "justify",
            marginTop: "100px",
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
              Predicting Conditions and Medications from Patient Reviews
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
              Analyzing text data from drug reviews provides valuable insights
              into the effectiveness and side effects of medications. In this
              post, we will explore how to preprocess text data, visualize key
              information, and build a multi-output neural network model to
              predict both the condition and the drug based on review text. By
              following these steps, you can gain a deeper understanding of
              natural language processing (NLP) and deep learning techniques
              applied to real-world data.
            </p>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
              <strong>Data Loading and Cleaning</strong>
            </h1>
            <p style={{ marginBottom: "16px" }}>
              The first step in our analysis is to load the dataset and handle
              any missing values. We use the `drugsTrain_raw.csv` file, which
              contains reviews, drug names, conditions, and other relevant
              information.
            </p>
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <Image
                src={data}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              <strong>Text Processing</strong>
            </h2>
            <p style={{ marginBottom: "16px" }}>
              Text preprocessing is crucial for converting raw text into a
              format suitable for machine learning models. We start by cleaning
              the review texts, tokenizing them, and then padding the sequences
              to ensure uniform length.{" "}
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
              <strong>Data Visualization</strong>{" "}
            </h2>
            <p style={{ marginBottom: "16px" }}>
              {" "}
              Visualizing data can provide valuable insights. We use Plotly for
              interactive visualizations and WordCloud for generating a word
              cloud.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString2}
            </SyntaxHighlighter>
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <Image
                src={chart}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              <strong>Model Building</strong>
            </h2>
            <p>
              We build a neural network with multiple outputs to predict both
              the condition and the drug name based on review text. This model
              uses LSTM layers to handle the sequential nature of text data.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString3}
            </SyntaxHighlighter>
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <Image
                src={epoc}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "15px",
                marginTop: "20px",
              }}
            >
              <strong>Predictions</strong>
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
                maxWidth: "1000px",
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

export default Post1;
