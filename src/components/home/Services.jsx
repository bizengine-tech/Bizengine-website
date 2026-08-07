import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShoppingCart,
  FaUsers,
  FaBullhorn,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaChartLine,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      desc: "Modern, responsive and SEO-friendly websites for your business.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Setup",
      desc: "Amazon, Flipkart, Meesho & Shopify complete setup.",
    },
    {
      icon: <FaUsers />,
      title: "B2B Channel Setup",
      desc: "IndiaMART and B2B marketplace account management.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      desc: "SEO, Google Ads, Meta Ads and branding solutions.",
    },
    {
      icon: <FaGlobe />,
      title: "Social Media",
      desc: "Professional social media management & growth.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Business Training",
      desc: "Practical training with live projects and support.",
    },
    {
      icon: <FaChartLine />,
      title: "Business Consulting",
      desc: "Business growth strategy and online expansion.",
    },
    {
      icon: <FaBriefcase />,
      title: "Complete Business Setup",
      desc: "Everything you need to start your online business.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-center text-gray-900">
            Our Services
          </h2>

          <p className="text-center text-gray-500 mt-5 text-lg max-w-2xl mx-auto">
            Everything your business needs to build, launch and grow online.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-7 mb-6">
                {service.desc}
              </p>

              <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">

                Learn More

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;