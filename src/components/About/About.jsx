import { useState } from 'react'
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2>About Me</h2>

        <p className="about-text">
          Hello! I'm <span className="highlight">Deepika H G</span>, an
          aspiring Artificial Intelligence and Machine Learning student
          passionate about technology and innovation.
        </p>

        <p className="about-text">
          I enjoy building responsive and user-friendly websites using
          HTML, CSS, JavaScript, and React. I am constantly learning new
          technologies and improving my problem-solving skills through
          projects and hands-on experience.
        </p>

        <p className="about-text">
          Apart from coding, I love exploring emerging AI technologies,
          participating in technical events, and working on creative ideas
          that combine technology with real-world solutions.
        </p>

        <div className="about-details">
          <div className="detail-card">
            <h3>🎓 Education</h3>
            <p>B.Tech in AI & ML</p>
          </div>

          <div className="detail-card">
            <h3>💻 Interests</h3>
            <p>Web Development & AI</p>
          </div>

          <div className="detail-card">
            <h3>🚀 Goal</h3>
            <p>Become a Skilled Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;