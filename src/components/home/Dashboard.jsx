import { motion } from "framer-motion";
import {
  FaChartLine,
  FaUsers,
  FaShoppingCart,
  FaGlobe,
} from "react-icons/fa";

function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative w-[520px] h-[420px] bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
    >
      {/* Revenue Card */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <p className="text-gray-500 text-sm">Monthly Revenue</p>
          <h2 className="text-3xl font-bold text-gray-900">
            ₹2.8L
          </h2>
        </div>

        <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl">
          <FaChartLine size={26} />
        </div>
      </div>

      {/* Fake Chart */}
      <div className="flex items-end gap-3 h-36 mb-10">
        <motion.div
          animate={{ height: [70, 110, 70] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 bg-blue-500 rounded-t-xl"
        />

        <motion.div
          animate={{ height: [120, 80, 120] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 bg-blue-400 rounded-t-xl"
        />

        <motion.div
          animate={{ height: [90, 140, 90] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 bg-indigo-500 rounded-t-xl"
        />

        <motion.div
          animate={{ height: [140, 90, 140] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 bg-blue-600 rounded-t-xl"
        />

        <motion.div
          animate={{ height: [60, 100, 60] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-8 bg-sky-400 rounded-t-xl"
        />
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
          <FaUsers className="text-blue-600 text-xl" />
          <div>
            <h3 className="font-bold">500+</h3>
            <p className="text-gray-500 text-sm">Clients</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
          <FaShoppingCart className="text-blue-600 text-xl" />
          <div>
            <h3 className="font-bold">1200+</h3>
            <p className="text-gray-500 text-sm">Orders</p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
          <FaGlobe className="text-blue-600 text-xl" />
          <div>
            <h3 className="font-bold">25+</h3>
            <p className="text-gray-500 text-sm">Countries</p>
          </div>
        </div>

        <div className="bg-blue-600 rounded-xl p-4 text-white">
          <h3 className="font-bold text-lg">+35%</h3>
          <p className="text-sm">Business Growth</p>
        </div>

      </div>
    </motion.div>
  );
}

export default Dashboard;