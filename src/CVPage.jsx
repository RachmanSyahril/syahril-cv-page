import React from "react";
import CVSegment from "./components/cvpage/CVSegment";
import CVContent from "./components/cvpage/CVContent";
import "./assets/CVPage.css";

// Datas
import personalInfos from "./assets/datas/personalInfos.json";
import socmeds from "./assets/datas/socmeds.json";
import skills from "./assets/datas/skills1.json";
import edus from "./assets/datas/educations.json";
import exps from "./assets/datas/experiences";

function CVPage() {
  return (
    <section className="cv__document">
      <div className="cv__side">
        <h1>Syahril Rachman</h1>
        <small>Web Developer</small>
        <img
          src={process.env.PUBLIC_URL + "/foto.jpg"}
          alt="foto"
          style={{
            width: "57%",
            borderRadius: "50%",
            margin: "24px 0px 16px",
            alignSelf: "center",
          }}
        />
        <CVSegment title={"Personal Informations"} items={personalInfos} />
        <CVSegment title={"Social Media"} items={socmeds} />
        <br />
        <CVSegment title={"Technical Skills"} items={skills} />
      </div>

      <div className="cv__main">
        <p>
          Starting my academic journey in network and computer infrastructure, I
          discovered a natural affinity for Application and System Management.
          Over the years, I’ve built hands-on experience across Web, Desktop,
          Mobile, and Backend Programming, while also honing skills in Technical
          Support and Freelancing.
        </p>
        <br />
        <p>
          Today, I’m committed to deepening my expertise and steadily
          progressing toward my goal of becoming a Senior Web Developer.
        </p>

        <h2>Education</h2>
        {edus.map((edu, idx) => (
          <CVContent
            key={idx}
            period={edu.period}
            periodDesc={edu.periodDesc}
            title={edu.title}
            subTitle={edu.subTitle}
            desc={edu.desc}
          ></CVContent>
        ))}

        <h2>Experience</h2>
        {exps.map((exp, idx) => (
          <CVContent
            key={idx}
            period={exp.period}
            periodDesc={exp.periodDesc}
            title={exp.title}
            subTitle={exp.subTitle}
            desc={exp.desc}
          >
            {exp.children}
          </CVContent>
        ))}
      </div>
    </section>
  );
}

export default CVPage;
