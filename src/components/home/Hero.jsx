import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import HeroBadge from "./HeroBadge";

function Hero() {
  return (
    <section className="bg-white pt-36 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 grid-cols-1 items-center gap-20">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Premium Badge */}
          <HeroBadge />

          <h1 className="text-6xl font-bold text-gray-900 leading-tight mt-6">
            Complete Online
            <br />
            Business Solutions
            <br />
            For Modern Businesses
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-8 max-w-xl">
            We help entrepreneurs and businesses grow through Website
            Development, E-Commerce Business Management Training, Digital
            Marketing, Social Media Management, B2B Business Channel Setup,
            E-Commerce Channel Setup, Business Consulting and Complete Online
            Business Solutions.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              Get Started
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Free Consultation
            </motion.button>

          </div>

          {/* Stats */}

          <div className="flex flex-wrap gap-10 mt-14">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                500+
              </h2>

              <p className="text-gray-500">
                Businesses
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                1000+
              </h2>

              <p className="text-gray-500">
                Students
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                98%
              </h2>

              <p className="text-gray-500">
                Success Rate
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <Dashboard />
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;