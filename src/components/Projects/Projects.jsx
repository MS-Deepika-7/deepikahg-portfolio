import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Weather Dashboard",
      
      description: "A real-time weather dashboard using APIs.",
      tech: ["React", "API"],
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      
      description: "A task management application with CRUD features.",
      tech: ["React", "JavaScript"],
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Event Planner",
      
      description: "An event planning platform for organizing events easily.",
      tech: ["React", "CSS"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tech.map((tech, index) => (
                  <span className="tag" key={index}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo}>Live Demo</a>
                <a href={project.github}>GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;