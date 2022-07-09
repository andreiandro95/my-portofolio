import Nav from "./Components/Nav";
import PresentationHeader from "./Components/PresentationHeader";
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
        <Nav />
        <PresentationHeader />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
