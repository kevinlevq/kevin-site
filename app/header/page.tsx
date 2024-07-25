import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";

const HeaderDisplay: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "black",
          justifyContent: "flex-end",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Kevin Le</h1>{" "}
        <nav style={{ display: "flex", marginLeft: "20px" }}>
          <Link href="/" passHref>
            <span
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "#000",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              Posts
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              style={{
                marginLeft: "10px",
                textDecoration: "none",
                color: "#000",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              About
            </span>
          </Link>
        </nav>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginLeft: "0" }}>
        <Link href="https://github.com/kevinlevq" passHref locale={false}>
          <span
            style={{ color: "black", cursor: "pointer" }}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/kevinvqle/"
          passHref
          locale={false}
        >
          <span
            style={{
              marginLeft: "10px",
              color: "#000",
              cursor: "pointer",
            }}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </span>
        </Link>
        <Link href="/Kevin_Le_Resume2024.pdf" passHref locale={false} download>
          <span
            style={{
              marginLeft: "10px",
              color: "#000",
              cursor: "pointer",
            }}
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFileAlt} size="2x" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HeaderDisplay;
