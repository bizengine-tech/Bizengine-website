function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Welcome to BizEngine
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mt-6">
              Complete
              <br />
              Online Business
              <br />
              Solutions
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              BizEngine helps startups, entrepreneurs and businesses
              establish a strong online presence through Website
              Development, Digital Marketing, E-Commerce Setup,
              B2B Business Solutions and Business Consulting.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
              >
                Get Free Quote
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-full max-w-lg h-[420px] rounded-3xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-xl">

              <div className="text-center">

                <div className="text-7xl mb-4">
                  💼
                </div>

                <h2 className="text-3xl font-bold text-blue-700">
                  BizEngine
                </h2>

                <p className="text-gray-600 mt-3">
                  Complete Online Business Solutions
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;