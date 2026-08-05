import {
  FaGlobe,
  FaShoppingCart,
  FaUsers,
  FaBullhorn,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Website Development",
    },
    {
      icon: <FaShoppingCart size={40} />,
      title: "E-Commerce Channel Setup",
    },
    {
      icon: <FaUsers size={40} />,
      title: "B2B Business Channel Setup",
    },
    {
      icon: <FaBullhorn size={40} />,
      title: "Digital Marketing",
    },
    {
      icon: <FaGlobe size={40} />,
      title: "Social Media Management",
    },
    {
      icon: <FaChalkboardTeacher size={40} />,
      title: "E-Commerce Training",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Business Consulting",
    },
    {
      icon: <FaBriefcase size={40} />,
      title: "Complete Business Setup",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mt-5 text-lg">
          Everything your business needs to grow online.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white border rounded-3xl p-8 text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >

              <div className="text-blue-600 flex justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="font-bold text-xl">
                {service.title}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;