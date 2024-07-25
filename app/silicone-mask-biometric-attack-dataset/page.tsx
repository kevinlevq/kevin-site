import React from "react";
import Image from "next/image";
import HeaderDisplay from "../header/page";

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
              Silicone Mask Biometric Attack Dataset (Work in Progress)
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
              This is my most current project
            </p>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}></h1>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
