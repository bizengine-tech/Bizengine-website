import Footer from "./components/home/Footer";
import Contact from "./components/home/Contact";
import Portfolio from "./components/home/Portfolio";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Stats from "./components/home/Stats";
import Services from "./components/home/Services";
import About from "./components/home/About";
import WhyChoose from "./components/home/WhyChoose";
import Process from "./components/home/Process";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;