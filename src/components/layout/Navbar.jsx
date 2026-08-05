function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          BizEngine
        </h1>

        <ul className="flex gap-8 text-gray-700 font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;