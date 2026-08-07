import Navbar from "./components/layout/Navbar";

import Hero from "./components/home/Hero";
import TrustBar from "./components/home/TrustBar";
import Stats from "./components/home/Stats";
import Services from "./components/home/Services";
import About from "./components/home/About";
import WhyChoose from "./components/home/WhyChoose";
import Process from "./components/home/Process";
import Portfolio from "./components/home/Portfolio";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="trust">
          <TrustBar />
        </section>

        <section id="stats">
          <Stats />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="why">
          <WhyChoose />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;