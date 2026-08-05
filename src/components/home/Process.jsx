function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "Understand your business goals and requirements.",
    },
    {
      number: "02",
      title: "Planning",
      desc: "Create the perfect strategy for your business.",
    },
    {
      number: "03",
      title: "Development",
      desc: "Build your website, branding and business systems.",
    },
    {
      number: "04",
      title: "Growth",
      desc: "Launch, market and scale your business online.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Our Process
        </h2>

        <p className="text-center text-gray-500 mt-5 text-lg">
          A simple 4-step process to grow your business online.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mt-8">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {step.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Process;