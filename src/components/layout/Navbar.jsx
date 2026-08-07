import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
          BizEngine
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get Quote
        </a>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">

          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-100 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <a
            href="#contact"
            className="block text-center bg-blue-600 text-white py-4"
          >
            Get Quote
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;