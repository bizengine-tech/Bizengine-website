import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../../assets/images/logos/bizengine-logo.png";

function Footer() {
  return (

    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            {/* BizEngine Logo */}

            <a href="#home" className="inline-block">

              <img
                src={logo}
                alt="BizEngine Logo"
                className="w-44 h-auto object-contain bg-white rounded-xl p-3"
              />

            </a>

            <p className="text-gray-400 mt-5 leading-7">

              Complete Online Business Solutions for startups,
              entrepreneurs and growing businesses.

            </p>

            {/* Social Media */}

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
  href="https://www.instagram.com/biz_engine_/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 hover:-translate-y-1 transition-all duration-300"
>
  <FaInstagram />
</a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://wa.me/918938855925"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center hover:bg-green-700 hover:-translate-y-1 transition-all duration-300"
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
                <a
                  href="#home"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#whychoose"
                  className="hover:text-white transition"
                >
                  Why Choose Us
                </a>
              </li>

              <li>
                <a
                  href="#process"
                  className="hover:text-white transition"
                >
                  Process
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
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

              <li>Business Consultation</li>
              <li>Complete Business Solutions</li>
              <li>B2B Business Setup</li>
              <li>E-Commerce Setup</li>
              <li>Digital Marketing</li>
              <li>Social Media Management</li>
              <li>Website Development</li>

            </ul>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li className="flex items-start gap-3">

                <FaPhoneAlt className="text-blue-500 mt-1 shrink-0" />

                <span>
                  +91 8938855925
                </span>

              </li>

              <li className="flex items-start gap-3">

                <FaWhatsapp className="text-green-500 mt-1 shrink-0" />

                <a
                  href="https://wa.me/918938855925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  +91 8938855925
                </a>

              </li>

              <li className="flex items-start gap-3">

                <FaEnvelope className="text-red-400 mt-1 shrink-0" />

                <a
                  href="mailto:bizengine10@gmail.com"
                  className="hover:text-white transition"
                >
                  bizengine10@gmail.com
                </a>

              </li>

              <li className="flex items-start gap-3">

                <FaMapMarkerAlt className="text-blue-500 mt-1 shrink-0" />

                <span>
                  Meerut, Uttar Pradesh, India
                </span>

                            </li>

            </ul>

          </div>

        </div>


        {/* Bottom Bar */}

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">

          <p>
            © {new Date().getFullYear()} BizEngine. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;