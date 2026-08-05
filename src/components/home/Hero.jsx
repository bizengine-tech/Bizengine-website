import { motion } from "framer-motion";
import Dashboard from "./Dashboard";

function Hero() {
  return (
    <section className="bg-white pt-36 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 grid-cols-1 items-center gap-16">

        {/* Left Content */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Welcome to BizEngine
          </span>

          <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-5">
            Complete Online
            <br />
            Business Solutions
            <br />
            For Modern Businesses
          </h1>

          <p className="text-gray-600 mt-6 text-lg leading-8">
            We help entrepreneurs and businesses grow through Website
            Development, E-Commerce Business Management Training, Digital
            Marketing, Social Media Management, B2B Business Channel Setup,
            E-Commerce Channel Setup, Business Consulting and Complete Online
            Business Solutions.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
              Free Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Dashboard />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;