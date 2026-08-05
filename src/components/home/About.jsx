import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 h-[450px] rounded-3xl shadow-xl flex items-center justify-center">

          <h2 className="text-4xl font-bold text-blue-600">
            BizEngine
          </h2>

        </div>

        {/* Right Side */}

        <div>

          <span className="text-blue-600 font-semibold uppercase">
            About Us
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            We Build Businesses,
            Not Just Websites
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            BizEngine provides complete online business solutions
            including Website Development, Digital Marketing,
            E-Commerce Setup, B2B Channel Management,
            Social Media Management and Business Consulting.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600" />
              Website Development
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600" />
              Digital Marketing
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600" />
              E-Commerce Solutions
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-blue-600" />
              Business Consulting
            </div>

          </div>

          <button className="mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">
            Learn More
          </button>

        </div>

      </div>
    </section>
  );
}

export default About;