import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import logo from "../../assets/images/logos/bizengine-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Process", to: "process" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <>
      <header className="relative z-50 w-full bg-transparent">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="home"
            smooth={false}
            duration={0}
            offset={0}
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="BizEngine"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-8">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={false}
                duration={0}
                offset={0}
                spy={true}
                activeClass="text-blue-600"
                className="cursor-pointer text-gray-700 font-medium hover:text-blue-600 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Desktop Get Quote */}

          <Link
            to="contact"
            smooth={false}
            duration={0}
            offset={0}
            className="hidden md:flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}

          <button
            type="button"
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
                {/* Mobile Menu */}

        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-lg">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={false}
                duration={0}
                offset={0}
                onClick={() => setIsOpen(false)}
                className="block px-6 py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Get Quote */}

            <Link
              to="contact"
              smooth={false}
              duration={0}
              offset={0}
              onClick={() => setIsOpen(false)}
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center py-4 cursor-pointer transition"
            >
              Get Quote
            </Link>

          </div>
        )}

      </header>
    </>
  );
}

export default Navbar;