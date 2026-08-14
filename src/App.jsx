import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import DevOps from "./components/DevOps";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <>

    <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <DevOps />
        <Credentials />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;