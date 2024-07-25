import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import HeaderDisplay from "../header/page";

const codeString = `
rebasing: 

git log --oneline
git rebase -i <commit sha>
git push -f

cleaning up commits:

git reset <dev/main>
recommit the items
git push -f

commit messages:

feat - Describes additional feature
fix - Describes fix or bug fix
chore - Describes MISC
style - Describes styling changes
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
            <strong>What I learned my First Year as a SWE </strong>
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
              Looking back at my first year as a software engineer, I have
              learned a lot about the industry and the skills needed to succeed.
              Here are some of the key takeaways from my experience:
            </p>
            <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
              <strong>Initial Challenges</strong>
            </h1>
            <p style={{ marginBottom: "16px", fontSize: "19px" }}>
              When I first joined Southern California Edison as an intern my
              junior year of college, I found out very quickly how different
              building real-world applications were compared to classes. I had
              to think about 3 main points: scalability, maintainability, and
              performance. I had to learn how to write clean, efficient code
              that could handle large amounts of data and users. I also had to
              learn how to work with a team of developers and work on a large
              code base. It was a steep learning curve and I began to develop
              imposter syndrome. I began to feel like my skills were not up to
              par with my peers and I had to learn that everyone feels this way
              at some point in their career. However, I was able to overcome
              this fear and manouver through the challenges and learned 5 key
              things:
            </p>
            <div
              style={{ width: "100%", maxWidth: "1000px", margin: "0 auto" }}
            ></div>
            <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
              <strong>Working With Github</strong>
            </h2>
            <p style={{ marginBottom: "16px", fontSize: "19px" }}>
              Github is integral with my workflow. Learning how to use Git was
              difficult for me since in college I never had to use it. I had to
              learn how to use branches, pull requests, and merges. I also had
              to learn how to write good commit messages and how to resolve
              merge conflicts. The one thing in particular that I learned was
              rebasing/interactive rebases which helped me keep my commits
              clean. Naming PRs was something I had to learn as well. I learned
              that naming PRs with the ticket number and a brief description of
              the changes was important for tracking purposes. Additionally, I
              explored GitHub Actions to automate my workflows and this tool
              allowed me to set up CI/CD pipelines and ensured that the codebase
              remained stable and new features were tested before deployment.
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
              <strong>1:1 with Mentor and Manger</strong>
            </h2>
            <p style={{ marginBottom: "16px", fontSize: "19px" }}>
              Receiving feedback is crucial for growth, and I was fortunate to
              have regular 1:1 meetings with my mentor and managers. These
              sessions provided a safe space to discuss my progress, challenges,
              and areas for improvement. My mentor offered valuable insights
              into my coding practices, helping me refine my approach and adopt
              best practices. During these meetings, I learned to ask targeted
              questions that drew from both software engineering and the
              business side. For example, I would inquire about how a particular
              feature aligned with business goals or how I could improve my
              collaboration with other teams. This proactive approach to seeking
              feedback allowed me to grow both technically and professionally.
            </p>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <strong>Working on Tickets: Navigating the Workflow</strong>
            </h2>
            <p style={{ marginBottom: "16px", fontSize: "19px" }}>
              Working on tickets was a significant part of my role. Each ticket
              represented a specific task or feature that needed to be
              addressed, and managing these tickets efficiently was essential. I
              learned to break down complex tasks into smaller, manageable
              subtasks, which made it easier to track progress and meet
              deadlines. Effective communication was key when working on
              tickets. I regularly updated the ticket status, provided detailed
              descriptions of my changes, and collaborated with team members to
              resolve any issues. This systematic approach ensured that tasks
              were completed efficiently and that the team remained aligned.
            </p>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <strong>Code Reviews: A Learning Opportunity</strong>
            </h2>
            <p style={{ marginBottom: "16px", fontSize: "19px" }}>
              Code reviews have been one of the most valuable learning
              opportunities during my first year. Participating in code reviews,
              both as a reviewer and a reviewee, has significantly improved my
              coding skills and understanding of best practices. As a reviewer,
              I learned to critically analyze code, looking for potential bugs,
              performance issues, and adherence to coding standards. This
              process honed my attention to detail and deepened my understanding
              of the codebase. Providing constructive feedback also improved my
              communication skills, as I had to articulate my suggestions
              clearly and respectfully. As a reviewee, I received invaluable
              feedback from more experienced colleagues. This feedback helped me
              identify areas for improvement and learn new techniques. I came to
              appreciate the importance of writing clean, readable code and
              documenting my thought process. The iterative nature of code
              reviews ensured that the final product was of high quality and met
              the team&apos;s standards.
            </p>
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <strong>Understanding Technical Information</strong>
            </h2>
            <p style={{ marginBottom: "16px", fontSize: "19px" }}>
              Understanding and processing technical information is a critical
              skill for any software engineer. Throughout my first year, I
              encountered numerous technical documents, design specifications,
              and codebases. To navigate these effectively, I developed a
              methodical approach. Firstly, I prioritized understanding the
              high-level architecture and overall purpose of the system or
              feature. This context helped me grasp the significance of the
              details. Secondly, I engaged in active reading, annotating
              documents and making notes of key points and questions. Finally, I
              sought clarification from more experienced colleagues whenever
              necessary. This approach enabled me to quickly absorb and apply
              technical information, enhancing my productivity and
              effectiveness.The ability to process and understand technical
              information is something that has greatly improved my productivity
              and effectiveness as a software engineer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post2;
