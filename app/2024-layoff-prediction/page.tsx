import React from "react";
import Image from "next/image";
import data from "../images/Screenshot 2024-07-25 at 12.08.43 PM.png";
import heatmap from "../images/Screenshot 2024-07-25 at 12.11.36 PM.png";
import map from "../images/Screenshot 2024-07-25 at 12.14.10 PM.png";
import results from "../images/Screenshot 2024-07-25 at 12.20.45 PM.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import HeaderDisplay from "../header/page";

const codeString = `
import seaborn as sns
import matplotlib.pyplot as plt

correlation = df.corr()
plt.figure(figsize=(10,8))
sns.heatmap(correlation, annot=True, cmap='coolwarm')
plt.show()
`;

const codeString2 = `
from mapbox import Geocoder
import pandas as pd

access_token = PROCESS.ENV.MAPBOX_ACCESS_TOKEN
geocoder = Geocoder(access_token=access_token)

df = pd.read_csv('/Users/kevin/Documents/tech_layoffs.csv')

def geocode_address(address):
    response = geocoder.forward(address)
    if response.status_code == 200 and len(response.json()['features']) > 0:
        result = response.json()['features'][0]
        return result['geometry']['coordinates'][1], result['geometry']['coordinates'][0]
    else:
        return None, None

df['latitude'], df['longitude'] = zip(*df['headquarter_location'].map(geocode_address))
`;

const codeString3 = `
# Split the data into training set and test set (50% each)
X_train, X_test, y_train, y_test = train_test_split(features, target, test_size=0.5, random_state=42)

# Define the base models
base_models = [
    ('xgboost', xgb.XGBRegressor(objective='reg:squarederror')),
    ('ridge', Ridge()),
    ('gboost', GradientBoostingRegressor())
]

# Define the StackingRegressor
stacked_model = StackingRegressor(estimators=base_models, final_estimator=Ridge(), cv=5)
`;

const codeString4 = `
# Define the parameter grid for Grid Search
param_grid = {
    'ridge__alpha': [0.1, 0.5, 1.0, 2.0, 5.0],
    'xgboost__learning_rate': [0.01, 0.05, 0.1, 0.2],
    'xgboost__n_estimators': [100, 200, 500, 1000],
    'gboost__learning_rate': [0.01, 0.05, 0.1, 0.2],
    'gboost__n_estimators': [100, 200, 500, 1000]
}

# Define the StackingRegressor
stacked_model = StackingRegressor(estimators=base_models, final_estimator=Ridge(), cv=5)

# Define the GridSearchCV object
grid_search = GridSearchCV(stacked_model, param_grid, cv=5, scoring='neg_mean_squared_error')

# Fit the GridSearchCV object to the data
grid_search.fit(X_train, y_train)
`;

const codeString5 = `
# Loop over all encoded companies in the specific industries and make a prediction for each
for encoded_company in company_codes_in_industries:
    company = le_dict['company'].inverse_transform([encoded_company])[0]  # get original company name
    industry = df[df['company'] == encoded_company]['industry'].mode()[0]  # get the most common industry for this company
    # Loop over the months January, February, and March
    for month in [1, 2, 3]:  # 1: January, 2: February, 3: March
        features_dict = {
            'company': encoded_company,  # use integer-encoded company
            'impacted_workforce_percentage': df['impacted_workforce_percentage'].median(),
            'industry': industry,  # use the industry of the company
            'headquarter_location': df['headquarter_location'].mode()[0],
            'sources': df['sources'].mode()[0],
            'status': df['status'].mode()[0],
            'year': 2024,
            'month': month
        }
        # Convert the dictionary to a DataFrame and ensure the order of columns
        features = pd.DataFrame([features_dict])[columns_order]
        # Scale the features
        features = pd.DataFrame(scaler.transform(features), columns=features.columns)
        # Make the prediction using the model
        predicted_layoffs = model.predict(features)
        # Append the prediction to the list
        predictions.append({'Company': company, 'Predicted Layoffs': predicted_layoffs[0], 'Month': month})
`;

const Post3 = () => {
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
              2024 Layoff Predictions Using Gradient Boosting Regressor
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
              This project aims to predict layoffs within the tech industry for
              2024 based on data from 2022 and 2023. This project focuses on
              analyzing trends across various industries, locations, and
              companies to forecast workforce reductions.
            </p>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
              <strong>Data Visualization</strong>
            </h1>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                src={data}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              <strong>Heat Map</strong>
            </h2>
            <p style={{ marginBottom: "16px" }}>
              In our heatmap, the color of each cell visually signifies the
              degree of correlation between the variables. Redder squares
              indicate a positive correlation between the variables, bluer
              squares indicate a negative correlation and white or
              lighter-colored squares indicate little to no correlation.
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
              <div
                style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
              >
                <Image
                  src={heatmap}
                  alt="Descriptive text about the image"
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
              <strong>Visual Map of Layoffs</strong>{" "}
            </h2>
            <p style={{ marginBottom: "16px" }}>
              {" "}
              This script uses the Mapbox Geocoding API to convert the physical
              addresses of tech companies (found in the
              &apos;headquarter_location&apos; column of a CSV file) into
              geographical coordinates (latitude and longitude). The results are
              added to the original DataFrame, creating new columns
              &apos;latitude&apos; and &apos;longitude&apos; that store these
              coordinates for each company. Using this map, we noticed that the
              most amount of layoffs were in the Bay Area and in the East Coast.
              This correlates with how most of these areas are heavily tech
              related.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString2}
            </SyntaxHighlighter>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                src={map}
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
              In this part of our analysis, we are setting up the predictive
              models we will use to forecast layoffs. We are using a technique
              called &apos;stacking&apos;, which combines several different
              machine learning models to make a prediction. Specifically, we are
              using three base models: an XGBoost model, a Ridge Regression
              model, and a Gradient Boosting Regressor.
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
              <strong>Hyperparameter tuning and model training</strong>
            </h2>
            <p>
              we fine-tune our models using a method called &apos;Grid
              Search&apos;. This technique allows us to experiment with
              different settings for each model, known as
              &apos;hyperparameters&apos;, and then select the ones that give us
              the best results. For instance, we test different values for
              &apos;alpha&apos; in Ridge Regression, and
              &apos;learning_rate&apos; and &apos;n_estimators&apos; in both
              XGBoost and Gradient Boosting. Our Grid Search runs each model
              with all possible combinations of these hyperparameters, then
              evaluates their performance using 5-fold cross-validation. The
              goal is to find the combination that minimizes the mean squared
              error, a common metric for measuring prediction error. After
              setting up the grid search, we fit it to our training data. This
              starts the search for the best hyperparameters and the model will
              be trained using those.
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
              }}
            ></div>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              <strong>Feature Engineering and Predicting</strong>
            </h2>
            <p>
              This section of the script is used to generate predicted layoffs
              for companies in specific industries for the first three months of
              2024. We&apos;re accomplishing this by creating a feature
              dictionary for each company, where we fill in data such as the
              median impacted workforce percentage, the company&apos;s industry,
              and the most common values for the headquarter location, sources,
              and status from our existing data. We also manually specify the
              year (2024) and loop through each month . For each combination of
              company and month, we convert the feature dictionary into a pandas
              DataFrame, scale the features to match the scale used in our model
              training, and then use our model to predict layoffs. Finally, we
              store these predictions in a list along with the corresponding
              company and month. The end result is a set of projections that
              give us an insight into what we might expect in terms of layoffs
              for the companies in our selected industries in the first quarter
              of 2024.
            </p>
            <SyntaxHighlighter language="python" style={docco}>
              {codeString5}
            </SyntaxHighlighter>
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
                marginTop: "25px",
              }}
            >
              <Image
                src={results}
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

export default Post3;
