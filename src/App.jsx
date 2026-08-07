import Navbar from "./components/layout/Navbar";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import Process from "./components/home/Process";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";

import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="process">
          <Process />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <WhatsAppButton />
      <ScrollToTopButton />
    </>
  );
}

export default App;