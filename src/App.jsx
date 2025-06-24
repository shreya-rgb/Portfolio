import Hero from './components/Hero'
import About from './components/About'
import Techstack from './components/Techstack'
import TechSphere from './components/TechSphere'
import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Experience from './components/Experience';
// import Contact from './components/Contact';
import Footer from './components/Footer';
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* <Navbar /> */}
      <Hero />
      <About />
      <Techstack />
   <TechSphere />
      <Projects />
      {/* <Resume /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
