import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentFocus from "./components/CurrentFocus";
import Impact from "./components/Impact";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <CurrentFocus />
      <Impact />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Experience />
      <Leadership />
      <Education />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
