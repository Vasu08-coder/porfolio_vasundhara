const Hero = () => {
  return (
    <section
      id="hero"
      className="hero"
      style={{
        background: "radial-gradient(circle at top,#dbeafe,white)"
      }}
    >
      <h1>Building Technology That Creates Impact</h1>
      <h2>Vasundhara Thakare</h2>
      
      <p>
        Computer Science Engineer,
        Research Paper Author and
        MERN Stack Developer passionate
        about creating intelligent solutions.
      </p>

      <div className="hero-btns">
        <a href="#projects">View Projects</a>
        <a href="#contact">Contact Me</a>
      </div>

      <div className="stats">
        <div>
          <h3>3+</h3>
          <p>Projects</p>
        </div>
        <div>
          <h3>1</h3>
          <p>Research Paper</p>
        </div>
        <div>
          <h3>8.4</h3>
          <p>CGPA</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
