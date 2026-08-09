import {
  FaLaptopCode,
  FaBullhorn,
  FaShoppingCart,
  FaUsers,
  FaFileInvoice,
  FaGlobe,
  FaChartLine,
  FaBriefcase,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaBriefcase size={42} />,
      title: "Business Consultation",
      description:
        "Expert consultation and strategic guidance to grow your business.",
    },

    {
      icon: <FaGlobe size={42} />,
      title: "Complete Business Solutions",
      description:
        "One place for all your online business and branding needs.",
    },

    {
      icon: <FaUsers size={42} />,
      title: "B2B Business Setup",
      description:
        "IndiaMART and other B2B platform account setup & management.",
    },

    {
      icon: <FaShoppingCart size={42} />,
      title: "E-Commerce Setup",
      description:
        "Amazon, Flipkart, Meesho and online store setup services.",
    },

    {
      icon: <FaBullhorn size={42} />,
      title: "Digital Marketing",
      description:
        "Grow your business through social media and online marketing.",
    },

    {
      icon: <FaChartLine size={42} />,
      title: "Social Media Management",
      description:
        "Professional management of Facebook, Instagram and other platforms.",
    },

    {
      icon: <FaLaptopCode size={42} />,
      title: "Website Development",
      description:
        "Professional business and company websites with responsive design.",
    },

    {
      icon: <FaFileInvoice size={42} />,
      title: "GST Services",
      description:
        "Quick and hassle-free GST registration and related services.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 overflow-hidden bg-transparent"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-5">
            What We Offer
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We provide complete online business solutions to help startups,
            entrepreneurs and businesses establish, manage and grow online.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {service.description}
              </p>
                          </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;