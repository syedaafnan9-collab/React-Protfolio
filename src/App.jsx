import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
