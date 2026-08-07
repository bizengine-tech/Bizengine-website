import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              BizEngine
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Complete Online Business Solutions for startups,
              entrepreneurs and growing businesses.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/8938855925"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 transition"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>

              <li>
                <a href="#process" className="hover:text-white">
                  Process
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>E-Commerce Setup</li>
              <li>B2B Business Setup</li>
              <li>GST Registration</li>
              <li>Business Consulting</li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>📞 +91 8938855925</li>
              <li>💬 +91 8938855925</li>
              <li>📧 bizengine10@gmail.com</li>
              <li>📍 Meerut, Uttar Pradesh, India</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">

          © {new Date().getFullYear()} BizEngine. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;