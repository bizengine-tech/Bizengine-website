import {
  FaComments,
  FaClipboardList,
  FaLaptopCode,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      icon: <FaComments size={38} />,
      number: "01",
      title: "Consultation",
      description:
        "We understand your business goals and discuss the best strategy for your success.",
    },

    {
      icon: <FaClipboardList size={38} />,
      number: "02",
      title: "Planning",
      description:
        "Our team prepares a proper roadmap and selects the right solutions for your business.",
    },

    {
      icon: <FaLaptopCode size={38} />,
      number: "03",
      title: "Development",
      description:
        "We develop your website, business setup and digital solutions with complete professionalism.",
    },

    {
      icon: <FaRocket size={38} />,
      number: "04",
      title: "Launch",
      description:
        "After final testing, we launch your project smoothly and ensure everything works perfectly.",
    },

    {
      icon: <FaChartLine size={38} />,
      number: "05",
      title: "Growth",
      description:
        "Even after launch, we continue supporting your business to achieve long-term growth.",
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 overflow-hidden bg-transparent"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-5">
            How We Work
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto leading-8">
            Our simple 5-step process ensures smooth communication,
            efficient execution and long-term business growth.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 hover:border-blue-500 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="flex justify-between items-center mb-6">

                <div className="text-blue-600">
                  {step.icon}
                </div>

                <span className="text-4xl font-bold text-gray-200">
                  {step.number}
                </span>

              </div>

              <h3 className="text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.description}
                              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;