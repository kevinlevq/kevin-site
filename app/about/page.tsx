import React from "react";
import pfp from "../images/DSC01723.jpg";
import Image from "next/image";
import HeaderDisplay from "../header/page";

const About: React.FC = () => {
  return (
    <div>
      <header>
        <HeaderDisplay />
      </header>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: "100px",
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto",
          marginLeft: "500px",
        }}
      >
        <div
          style={{
            marginRight: "20px",
            width: "400px",
            height: "300px",
          }}
        >
          <Image
            src={pfp}
            alt="Descriptive text about the image"
            width={400}
            height={300}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div style={{ fontSize: "1.4rem", color: "black", maxWidth: "600px" }}>
          <h2>
            <strong>About Me</strong>
          </h2>
          <p>
            Hello, my name is Kevin Le and I am currently pursuing a Master of
            Science in Computer Science with the focus of Machine Learning. My
            professional journey as a SWE includes a role as a junior software
            engineer at Southern California Edison where I have contributed to
            developing platforms utilizing AI and cloud solutions. My past
            experiences were at NASA-JPL and Undergraduate Research in Machine
            Learning. My technical abilities include React, Next.js, TypeScript,
            Python (SciKit-Learn and Tensorflow), Docker, and Azure Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
