import { ArrowRight } from "lucide-react";
import heroImage from "../../assets/images/hero/hero-business.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-transparent"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-4">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div>

            <span className="inline-flex items-center px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">

              🚀 Complete Online Business Solutions

            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-gray-900">

              Grow Your

              <br />

              Business With

              <br />

              <span className="text-blue-600">

                Smart Digital

                <br />

                Solutions

              </span>

            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-9 max-w-xl">

              We help businesses build websites,
              grow online through Digital Marketing,
              launch on E-Commerce platforms,
              generate B2B leads and scale faster.

            </p>

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 duration-300 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3"
              >

                Get Free Quote

                <ArrowRight size={20} />

              </a>

              <a
                href="https://wa.me/918938855925"
                target="_blank"
                rel="noreferrer"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white duration-300 px-8 py-4 rounded-xl font-semibold"
              >

                WhatsApp

              </a>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center relative">

            <img
              src={heroImage}
              alt="BizEngine"
              className="w-full max-w-xl lg:max-w-2xl object-contain"
            />

            {/* Left Edge Fade */}

            <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-blue-50 to-transparent pointer-events-none"></div>

            {/* Right Edge Fade */}

            <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-blue-100 to-transparent pointer-events-none"></div>
                      </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;