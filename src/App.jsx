import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Career from "./components/Career";
import Contact from "./components/Contact";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <SocialIcons />
      <main>
        <Hero />
       <About />
<Gallery />
<Skills />
        <Projects />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
