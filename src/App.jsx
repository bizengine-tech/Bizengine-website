import Navbar from "./components/layout/Navbar";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Services from "./components/home/Services";
import WhyChoose from "./components/home/WhyChoose";
import Process from "./components/home/Process";
import Contact from "./components/home/Contact";
import Footer from "./components/home/Footer";

import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PrivacyPolicy from "./components/PrivacyPolicy";

function App() {
  if (window.location.pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Force all main sections to share the same background */}

      <style>{`
        main,
        main > section,
        main section {
          background: transparent !important;
          background-color: transparent !important;
        }
      `}</style>

      <Navbar />

      <main>

        {/* Home */}

        <section id="home">
          <Hero />
        </section>

        {/* About */}

        <section id="about">
          <About />
        </section>

        {/* Services */}

        <section id="services">
          <Services />
        </section>

        {/* Why Choose Us */}

        <section id="whychoose">
          <WhyChoose />
        </section>

        {/* Process */}

        <section id="process">
          <Process />
        </section>

        {/* Contact */}

        <section id="contact">
          <Contact />
        </section>
                </main>

        <Footer />

        <WhatsAppButton />

        <ScrollToTopButton />

    </div>
  );
}

export default App;