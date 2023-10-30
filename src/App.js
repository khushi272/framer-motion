import Navabar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/services/Sevices";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import "./App.scss";
import Contact from "./components/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <>
    <Cursor/>
      <section id="Homepage">
        <Navabar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
