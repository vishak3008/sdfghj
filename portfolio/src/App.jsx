import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Academic from "./components/Academic";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative bg-slate-950 text-white overflow-x-hidden">

      {/* Grid Background */}


      {/* Glow (optional) */}
      <div className="fixed top-0 right-0 w-[700px] h-[700px] bg-sky-500/10 blur-[180px] rounded-full -z-10" />

      <Navbar />
      <Hero />
      <About />
      <Academic />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;