const projects = [
  {
    title: "Fake News Detector",
    desc: "AI-powered fake news detection system with research paper contribution.",
    github: "https://github.com/Vasu08-coder/news_detector_ai",
    demo: "https://news-detector-ai-rlrg.onrender.com"
  },
  {
    title: "SSC CGL Study Tracker",
    desc: "Student productivity and study planning platform.",
    github: "https://github.com/Vasu08-coder/SSC_CGL_Tracker",
    demo: "https://ssc-cgl-web.onrender.com"
  },
  {
    title: "Jan Kalyan Yojana",
    desc: "Government scheme awareness platform.",
    github: "#",
    demo: "#"
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
            <a href={project.github}> GitHub </a>
            <a href={project.demo}> Live Demo </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
