import {
  FaClock,
  FaHandshake,
  FaRupeeSign,
  FaHeadset,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaClock size={36} />,
      title: "Fast Delivery",
      description: "Quick and professional project delivery.",
    },
    {
      icon: <FaHandshake size={36} />,
      title: "Trusted Partner",
      description: "Reliable online business solutions.",
    },
    {
      icon: <FaRupeeSign size={36} />,
      title: "Affordable Pricing",
      description: "Best quality at competitive prices.",
    },
    {
      icon: <FaHeadset size={36} />,
      title: "24/7 Support",
      description: "We're always here to help you.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <span className="text-blue-600 uppercase font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why Choose BizEngine?
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We provide complete online business solutions with quality,
            affordability and dedicated support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition"
            >
              <div className="text-blue-600 flex justify-center mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;