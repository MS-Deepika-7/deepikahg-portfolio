import { useState } from 'react'
import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: "90%",
    },
    {
      name: "CSS",
      level: "85%",
    },
    {
      name: "JavaScript",
      level: "75%",
    },
    {
      name: "React",
      level: "70%",
    },
    {
      name: "Python",
      level: "80%",
    },
    {
      name: "AI & ML",
      level: "65%",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2>My Skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;