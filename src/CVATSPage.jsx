import React from "react";
import CVContent from "./components/cvpageats/CVContent";
import "./assets/CVATSPage.css";

// Datas
import skills from "./assets/datas/skills1.json";
import edus from "./assets/datas/educations.json";
import exps from "./assets/datas/experiences";

function CVPage() {
  return (
    <section className="cvats__document">
      <div className="cv__main">
        <h1>Syahril Rachman</h1>

        <div className="cv__row">
          <p>Bandung, Indonesia</p>&#8226;
          <p>+62 82321021294</p>&#8226;
          <p>rachman.syahril@gmail.com</p>
        </div>

        <p>
          Starting my academic journey in network and computer infrastructure, I
          discovered a natural affinity for Application and System Management.
          Over the years, I’ve built hands-on experience across Web, Desktop,
          Mobile, and Backend Programming, while also honing skills in Technical
          Support and Freelancing. Today, I’m committed to deepening my
          expertise and steadily progressing toward my goal of becoming a Senior
          Web Developer.
        </p>

        <h2>
          <strong>Education</strong>
        </h2>
        {edus.map((edu, idx) => (
          <CVContent
            key={idx}
            title={edu.title}
            subTitle={edu.subTitle}
            period={edu.period}
            place={edu.place}
            desc={edu.desc}
          ></CVContent>
        ))}

        <h2>
          <strong>Work Experience</strong>
        </h2>
        {exps.map((exp, idx) => (
          <CVContent
            key={idx}
            title={exp.title}
            subTitle={exp.subTitle}
            period={exp.period}
            place={exp.place}
            desc={exp.desc}
          >
            {exp.children}
          </CVContent>
        ))}

        <h2>
          <strong>Skills</strong>
        </h2>
        <br />
        {skills.map((skill, idx) => (
          <div className="cv__skills">
            <p>&nbsp;&#8226;&nbsp;</p>
            <p>
              <small>{skill.title}:</small>
            </p>
            <p>
              <small>{skill.value_list}</small>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CVPage;
