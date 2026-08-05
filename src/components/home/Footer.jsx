import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold text-blue-400">
              BizEngine
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Complete Online Business Solutions including Website Development,
              E-Commerce Setup, Digital Marketing, Social Media Management and
              Business Consulting.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Website Development</li>
              <li>Digital Marketing</li>
              <li>E-Commerce Setup</li>
              <li>Business Consulting</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <div className="bg-blue-600 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <FaFacebookF />
              </div>

              <div className="bg-pink-600 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <FaInstagram />
              </div>

              <div className="bg-blue-500 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <FaLinkedinIn />
              </div>

              <div className="bg-green-500 p-3 rounded-full cursor-pointer hover:scale-110 transition">
                <FaWhatsapp />
              </div>

            </div>

          </div>

        </div>

        <hr className="my-10 border-gray-700" />

        <p className="text-center text-gray-500">
          © 2026 BizEngine. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;