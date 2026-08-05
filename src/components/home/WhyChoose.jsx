import {
  FaRocket,
  FaHeadset,
  FaUserTie,
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaRocket size={34} />,
      title: "Fast Delivery",
      desc: "Quick project completion with quality.",
    },
    {
      icon: <FaHeadset size={34} />,
      title: "24/7 Support",
      desc: "Always available for your business.",
    },
    {
      icon: <FaUserTie size={34} />,
      title: "Expert Team",
      desc: "Professional developers & marketers.",
    },
    {
      icon: <FaShieldAlt size={34} />,
      title: "Trusted Service",
      desc: "Reliable & transparent solutions.",
    },
    {
      icon: <FaChartLine size={34} />,
      title: "Business Growth",
      desc: "Focused on long-term success.",
    },
    {
      icon: <FaHandshake size={34} />,
      title: "Complete Solution",
      desc: "Everything under one roof.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose BizEngine
        </h2>

        <p className="text-center text-gray-500 mt-5 text-lg">
          We don't just build websites.
          We build complete online businesses.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="border rounded-3xl p-8 hover:shadow-2xl transition duration-300"
            >

              <div className="text-blue-600 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;