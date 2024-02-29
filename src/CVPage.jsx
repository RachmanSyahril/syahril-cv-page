import React from 'react';
import CVSegment from './components/cvpage/CVSegment';
import CVContent from './components/cvpage/CVContent';
import './assets/CVPage.css';

// Datas
import personalInfos from './assets/datas/personalInfos.json';
import socmeds from './assets/datas/socmeds.json';
import skills from './assets/datas/skills1.json';
import edus from './assets/datas/educations.json';
import exps from './assets/datas/experiences';

function CVPage() {
  return (
    <section className="cv__document">
      <div className="cv__side">
        <h1>Syahril Rachman</h1>
        <small>Web Developer</small>
        <br />
        <br />
        <CVSegment title={'Personal Informations'} items={personalInfos} />
        <CVSegment title={'Social Media'} items={socmeds} />
        <br />
        <CVSegment title={'Technical Skills'} items={skills} />
      </div>

      <div className="cv__main">
        <p>
          Embarking on my educational journey in network and computer
          infrastructure, I found myself naturally drawn to Application and
          System Management. Through years of hands-on experience in Web,
          Desktop, Mobile, and Backend Programming, along with cultivating
          Technical Support and Freelancing skills, I've come to realize the
          vastness of the field. At this point, I'm humbly focused on the goal
          of gradually advancing toward the role of a Senior Web Developer.
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
