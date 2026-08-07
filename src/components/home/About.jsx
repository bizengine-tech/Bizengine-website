import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaBullhorn,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
    },
    {
      icon: <FaUsers />,
      title: "Business Consulting",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="relative"
        >

          <div className="h-[500px] rounded-[40px] bg-gradient-to-br from-blue-600 via-indigo-500 to-sky-500 shadow-2xl flex flex-col items-center justify-center text-white">

            <h2 className="text-6xl font-bold">
              BizEngine
            </h2>

            <p className="mt-4 text-xl opacity-90">
              Complete Online Business Solutions
            </p>

          </div>

          {/* Floating Card */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute -bottom-8 -right-8 bg-white rounded-3xl shadow-xl px-8 py-6"
          >
            <h3 className="text-4xl font-bold text-blue-600">
              500+
            </h3>

            <p className="text-gray-500">
              Businesses Supported
            </p>
          </motion.div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            About BizEngine
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-5 leading-tight">
            We Build Businesses,
            <br />
            Not Just Websites.
          </h2>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            BizEngine helps startups, entrepreneurs and businesses
            establish a powerful online presence through Website
            Development, Digital Marketing, E-Commerce Setup,
            Social Media Management and Business Consulting.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            {features.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-xl">

                  {item.icon}

                </div>

                <h4 className="font-semibold">
                  {item.title}
                </h4>

              </div>

            ))}

          </div>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default About;