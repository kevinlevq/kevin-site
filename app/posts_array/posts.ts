
import cover from "../images/dataset-cover.png";
import medicine from "../images/Screenshot 2024-07-24 at 12.29.44 AM.png";
import map from "../images/Screenshot 2024-07-24 at 12.43.47 AM.png";
import seide from "../images/Screenshot 2024-07-24 at 12.48.06 AM.png";
import face from "../images/dataset-cover (1).png";
import pfp from "../images/Screenshot 2024-07-25 at 1.56.06 PM.png";
import blog2 from "../images/images.png";


export const posts = [
    {
      date: "2024-01",
      title:
        "Predicting Conditions and Medications from Patient Reviews Using Text Analysis",
      tags: [
        "NLP",
        "Machine Learning",
        "Text Analysis",
        "Sentiment Analysis",
        "Predictive Modeling",
        "Health Care",
      ],
      summary:
        "This study utilizes Natural Language Processing (NLP) and Machine Learning techniques to analyze patient reviews and predict associated medical conditions and medications",
      image: medicine.src,
      slug: "predicting-conditions-and-medications",
    },
    {
      date: "2024-06",
      title:
        "Advancements in Wildfire Detection Using Satellite Imagery and Machine Learning",
      tags: [
        "Machine Learning",
        "Image Processing",
        "Convolutional Neural Networks",
        "Data Analysis",
      ],
      summary:
        "Machine Learning model implementation to accurately identify fire-prone areas, aiming to enhance early detection and monitoring of wildfires through advanced data science methods.",
      image: cover.src,
      slug: "advancements-in-wildfire-detection",
    },
    {
      date: "2023-05",
      title: "2024 Layoff Prediction",
      tags: [
        "Machine Learning",
        "Predictive Modeling",
        "Data Analysis",
        "Data Visualization",
        "Feature Engineering",
        "Gradient Boosting",
      ],
      summary:
        "This project aims to analyze layoffs trends in the tech industry from 2022-2023 and involves data cleaning, feature engineering, and predictive modeling.",
      image: map.src,
      slug: "2024-layoff-prediction",
    },
    {
      date: "2024-02",
      title: "SEIDE – Security-Enhanced Online IDE",
      tags: [
        "Cloudflare",
        "Digital Ocean",
        "Automated Penetration Testing Tools",
        "Node.js",
        "React.js",
        "Docker",
        "Web Sockets",
        "Virtual Machines",
      ],
      summary:
        "Developed a platform-as-a-service (PaaS) online IDE that can scan source code vulnerabilities in real time and ensure these issues are resolved before deployment",
      image: seide.src,
      slug: "seide-security-enhanced-online-ide",
    },
    {
      date: "2024-07",
      title: "Things I Learned From my First Year as a Software Engineer",
      tags: ["Blog", "Github", "Software Engineering"],
  
      summary:
        "This blog post reflects on the lessons learned during my first year as a software engineer, including the importance of mentorship, continuous learning, and the value of soft skills.",
      image: pfp.src,
      slug: "things-i-learned-from-my-first-year-as-a-software-engineer",
    },
    {
      date: "TBD",
      title: "Silicone Mask Biometric Attack Dataset (Work in Progress)",
      tags: [
        "Supervised Learning",
        "Classification",
        "Support Vector Machines",
        "Random Forest",
        "Convolutional Neural Networks",
      ],
      summary:
        "Develop a machine learning model capable of distinguishing between real human faces and silicone masks.",
      image: face.src,
      slug: "silicone-mask-biometric-attack-dataset",
    },
    {
      date: "2024-07",
      title: "Navigating The Transition from Academia to Industry",
      tags: ["Blog", "Software Engineering"],
  
      summary:
        "Navigating the transition from academia to industry in software engineering involves adapting to new team dynamics, continuous learning, and applying practical problem-solving skills to succeed in a professional enviroment",
      image: blog2.src,
      slug: "navigating-the-transition-from-academia-to-industry",
    },
  ];


  export default posts;



  