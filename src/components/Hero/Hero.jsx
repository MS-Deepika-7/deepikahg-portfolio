import { useState } from 'react'
import "./Hero.css";

function Hero() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">

        <div className="hero-image">
          <img src="/myphoto.jpeg" alt="Deepika H G" />
        </div>

        <div className="hero-text">
          <h1>{getGreeting()}, I'm Deepika H G</h1>

          <h2>Aspiring AI & ML Student</h2>

          <p>
            Passionate about Web Development, Artificial Intelligence
            and creating modern, responsive websites.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>

            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;