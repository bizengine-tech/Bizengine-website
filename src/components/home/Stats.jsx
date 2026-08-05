function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Businesses Served",
    },
    {
      number: "1000+",
      title: "Students Trained",
    },
    {
      number: "200+",
      title: "Websites Delivered",
    },
    {
      number: "98%",
      title: "Success Rate",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md py-10 text-center hover:shadow-xl transition duration-300"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>

              <p className="text-gray-600 mt-3">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;