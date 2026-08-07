function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">

            <div className="w-full max-w-md h-[420px] bg-white rounded-3xl shadow-lg border flex items-center justify-center">

              <div className="text-center">
                <div className="text-7xl mb-5">🏢</div>

                <h3 className="text-3xl font-bold text-blue-600">
                  BizEngine
                </h3>

                <p className="text-gray-600 mt-3">
                  Professional Business Solutions
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              About BizEngine
            </span>

            <h2 className="text-5xl font-bold text-gray-900 mt-5 leading-tight">
              Your Trusted Partner
              <br />
              For Online Business Growth
            </h2>

            <p className="text-gray-600 text-lg leading-8 mt-6">
              BizEngine is a professional business solutions company helping
              startups, entrepreneurs and growing businesses establish a
              powerful online presence. From website development to digital
              marketing and e-commerce setup, we provide everything required
              to grow your business online.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="font-bold text-blue-600">
                  ✓ Professional Service
                </h4>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="font-bold text-blue-600">
                  ✓ Affordable Pricing
                </h4>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="font-bold text-blue-600">
                  ✓ Fast Delivery
                </h4>
              </div>

              <div className="bg-white p-5 rounded-xl shadow">
                <h4 className="font-bold text-blue-600">
                  ✓ Customer Support
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;