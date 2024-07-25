import React from "react";
import Image from "next/image";
import sso from "../images/Screenshot 2024-07-25 at 12.41.32 PM.png";
import network from "../images/Screenshot 2024-07-25 at 12.45.16 PM.png";
import userDiagram from "../images/Screenshot 2024-07-25 at 12.49.15 PM.png";
import containerDiagram from "../images/Screenshot 2024-07-25 at 12.51.28 PM.png";
import devProcess from "../images/Screenshot 2024-07-25 at 12.52.42 PM.png";
import results from "../images/localhost_3000_.png";

import HeaderDisplay from "../header/page";

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
            <strong>SEIDE – Security-Enhanced Online IDE</strong>
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
              Insecure code is everywhere, and most developers don&apos;t
              consider the vulnerabilities associated with the IDEs they use
              every day. SEIDE attempts to solve this issue by developing a
              robust and highly secure online IDE that provides real-time source
              code vulnerability scanning out-of-the-box. We are primarily
              targeting IDEs because this is the most common platform developers
              use to write their code. For our solution, we will develop a
              platform-as-a-service (PaaS) online IDE that can scan source code
              vulnerabilities in real time and ensure these issues are resolved
              before deployment. We will be integrating an open-source,
              real-time source code security scanning solution along with
              implementing cloud security and API security features for the web
              application.
            </p>

            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              <strong>Single Sign on</strong>
            </h2>
            <p style={{ marginBottom: "16px" }}>
              When the user clicks on the Sign In button, they will be
              redirected to the sign in page where there will be two different
              options for signing in: sign in with Google, and sign in with
              GitHub. Both sign in processes will utilize the OAuth 2.0
              protocol. If the user chooses to sign in with Google, they will be
              redirected to Google&rsquo;s authorization page, where they will
              log in and grant permission for our application to access their
              Google account information. Upon granting consent, Google will
              issue an authorization grant that will enable our application to
              request and receive an access token. This token will be used to
              make authorized requests to Google APIs. Similarly, if the user
              chooses to sign in with GitHub, they will be redirected to
              GitHub&rsquo;s authorization page. Upon granting consent, our
              application will obtain the authorization grant that will allow
              our application access to the GitHub APIs. In both options, our
              application will handle retrieving user profile information and
              account linking to provide a seamless and secure sign in
              experience for our users.
            </p>

            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <div
                style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
              >
                <Image
                  src={sso}
                  alt="Descriptive text about the image"
                  layout="responsive"
                  width={400}
                  height={300}
                />
              </div>
              <strong>Secure Network Topology</strong>{" "}
            </h2>
            <p style={{ marginBottom: "16px" }}>
              {" "}
              The diagram presents a high-level architecture of a web
              application hosted across Azure and DigitalOcean, incorporating
              various security and integration components. Users access the
              application through the internet, protected by Cloudflare&apos;s
              web application firewall (WAF) and Turnstile for bot management.
              The application is hosted on Azure Static Web Apps, supporting
              Single Sign-On (SSO) with Google and GitHub for authentication.
              The API traffic is managed by Azure API Management, integrated
              with a virtual network (VNet) for secure access, and communicates
              securely via private endpoints. Azure Functions host the
              serverless API endpoints, while Azure Key Vault manages secrets
              and keys, providing secure access to the Azure Function Subnet. On
              the DigitalOcean side, a cloud firewall protects the environment,
              with virtual machines (VMs) acting as internet gateways and
              providing terminal access. The network is isolated within a
              Virtual Private Cloud (VPC), and the VMs host Docker containers,
              creating isolated networks through Docker Bridge. Secure WebSocket
              connections ensure communication from Docker containers to Azure
              Static Web Apps. Additionally, Teleport implements a Zero Trust
              security model for accessing DigitalOcean VMs, managing identity,
              and maintaining audit logs. Web3Forms handles contact forms and
              integrates with Google Sheets for newsletters. This setup
              leverages the strengths of both Azure and DigitalOcean to create a
              robust, secure, and scalable web application infrastructure,
              ensuring secure API management, containerized services, and
              protected user authentication.
            </p>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                src={network}
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
              <strong>User Diagram</strong>
            </h2>
            <p>
              Above is the Architecture Diagram where we plan to implement a way
              for the user to log in sign up and use our internal IDE. Once the
              user submits their code to get checked, Bearer will scan the
              source code for any vulnerabilities and point out the lines that
              give them the error.
            </p>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            >
              <Image
                src={userDiagram}
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
              <strong>Application Level Security (Containerization)</strong>
            </h2>
            <p>
              We will implement the above diagram in our application where we
              will dockerize important files and images so it can remain secure.
              Using these Docker methods we can prevent Root permission so
              anyone can&rsquo;t corrupt our application. Next, we can use
              Docker Trusted Registry which is protected by a firewall. We can
              also limit resource usage, scan images, and use the premade docker
              container monitor. With these tools, we will safely Dockerize our
              files without anything outside users corrupting anything.
            </p>
            <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
              <Image
                src={containerDiagram}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
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
              <strong>IDE Application Development Process</strong>
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
              of 2024
            </p>
            <div
              style={{
                width: "100%",
                maxWidth: "100000px",
                margin: "0 auto",
                marginTop: "25px",
              }}
            >
              <Image
                src={devProcess}
                alt="Descriptive text about the image"
                layout="responsive"
                width={400}
                height={300}
              />
            </div>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
              }}
            >
              <strong>Vision</strong>
            </h2>
            <div
              style={{
                width: "100%",
                maxWidth: "100000px",
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
