import { motion } from "framer-motion";
import {
  FaGlobe,
  FaShoppingCart,
  FaBullhorn,
  FaUsers,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

const portfolio = [
  {
    icon: <FaLaptopCode size={40} />,
    title: "Website Development",
    desc: "Modern, responsive and high-performance business websites.",
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: "E-Commerce Setup",
    desc: "Amazon, Flipkart, Meesho & Shopify complete setup.",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    desc: "SEO, Meta Ads, Google Ads & complete online promotion.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "Social Media Management",
    desc: "Instagram, Facebook & brand growth strategies.",
  },
  {
    icon: <FaGlobe size={40} />,
    title: "B2B Business Setup",
    desc: "IndiaMART, TradeIndia & B2B lead generation.",
  },
  {
    icon: <FaBriefcase size={40} />,
    title: "Complete Business Setup",
    desc: "Everything required to launch and grow your business.",
  },
];

function Portfolio() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Portfolio
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Recent Business Projects
          </h2>

          <p className="text-gray-600 mt-5 text-lg">
            Explore some of our business solutions and digital transformation services.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {portfolio.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="text-blue-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.desc}
              </p>

              <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                View Details
              </button>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Portfolio;