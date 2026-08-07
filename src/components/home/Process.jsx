import {
  FaComments,
  FaClipboardList,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function Process() {
  const steps = [
    {
      icon: <FaComments size={36} />,
      number: "01",
      title: "Contact Us",
      description:
        "Share your business requirements with our team through call, WhatsApp or email.",
    },
    {
      icon: <FaClipboardList size={36} />,
      number: "02",
      title: "Requirement Discussion",
      description:
        "We understand your business goals and suggest the best solution for your needs.",
    },
    {
      icon: <FaLaptopCode size={36} />,
      number: "03",
      title: "Development",
      description:
        "Our team starts working on your website, marketing or business setup professionally.",
    },
    {
      icon: <FaRocket size={36} />,
      number: "04",
      title: "Delivery & Support",
      description:
        "Project delivery with complete support to help your business grow successfully.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Our Process
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-5">
            How We Work
          </h2>

          <p className="text-gray-600 mt-6 text-lg max-w-3xl mx-auto leading-8">
            Our simple 4-step process ensures smooth communication and
            successful project delivery.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border hover:shadow-xl hover:border-blue-500 transition"
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