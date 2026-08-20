const projects = [
  {
    title: "Fake News Detector",
    desc: "AI-powered fake news detection system with research paper contribution.",
    github: "https://github.com/Vasu08-coder/news_detector_ai.git",
    demo: "https://onrender.com",
    isDeployed: true,
    isResearch: true
  },
  {
    title: "SSC CGL Study Tracker",
    desc: "Student productivity and study planning platform.",
    github: "https://github.com/Vasu08-coder/SSC_CGL_Web.git",
    demo: "https://onrender.com",
    isDeployed: true,
    isResearch: false
  },
  {
    title: "Jan Kalyan Yojana",
    desc: "Government scheme awareness platform.",
    github: "#",
    demo: "#",
    isDeployed: false,
    isResearch: false
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            
            <div style={{ margin: "10px 0", fontSize: "0.9rem" }}>
              {project.isResearch && <p>📄 Research Publication Associated</p>}
              {project.isDeployed && <p>🚀 Live Production Deployment</p>}
            </div>

            <div className="project-links">
              <a href={project.github}> GitHub </a>
              <a href={project.demo}> Live Demo </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
