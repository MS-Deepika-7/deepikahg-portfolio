import { useState } from 'react'
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather App",
      image: "/project1.jpeg",
      description:
        "A real-time weather dashboard that displays current weather information using APIs.",
      technologies: ["React", "API"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Todo Reminder",
      image: "/project2.jpeg",
      description:
        "A task management application that helps users organize and track daily activities.",
      technologies: ["JavaScript", "CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Shopping Ease",
      image: "/project3.jpg",
      description:
        "An e-commerce website with product listings and a modern user interface.",
      technologies: ["React", "API"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((tech, index) => (
                    <span className="tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;