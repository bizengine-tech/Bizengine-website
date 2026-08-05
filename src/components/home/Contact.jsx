import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact Us
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Let's Grow Your Business
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            We'd love to hear about your project. Get in touch today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="flex items-center gap-5">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                <FaPhoneAlt size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p className="text-gray-600">+91 XXXXX XXXXX</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                <FaEnvelope size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p className="text-gray-600">info@bizengine.in</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-blue-100 p-4 rounded-xl text-blue-600">
                <FaMapMarkerAlt size={24} />
              </div>

              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p className="text-gray-600">Meerut, Uttar Pradesh, India</p>
              </div>
            </div>

          </motion.div>

          {/* Right Side Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8 shadow-lg"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl border mb-5 outline-none"
            ></textarea>

            <button
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;