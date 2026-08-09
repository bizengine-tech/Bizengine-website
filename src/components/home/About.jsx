import aboutImage from "../../assets/images/about/about-business.png";
import { CheckCircle } from "lucide-react";

function About() {
  return (
    <section
      id="about-section"
      className="relative overflow-hidden bg-transparent pt-30 pb-30"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div>

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              About BizEngine
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              Empowering
              <br />
              Businesses With
              <br />
              <span className="text-blue-600">
                Smart Digital Solutions
              </span>
            </h2>

            <div className="mt-5 w-24 h-1 rounded-full bg-blue-600"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              BizEngine helps startups, entrepreneurs and businesses
              establish a powerful online presence through Website
              Development, Digital Marketing, E-Commerce Setup,
              B2B Business Solutions and complete Business Consulting.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              <div className="flex gap-3">

                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={22}
                />

                <div>
                  <h4 className="font-bold">
                    B2B Business Solutions
                  </h4>

                  <p className="text-gray-500">
                    IndiaMART • Export • Leads
                  </p>
                </div>

              </div>

              <div className="flex gap-3">

                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={22}
                />

                <div>
                  <h4 className="font-bold">
                    E-Commerce Setup
                  </h4>

                  <p className="text-gray-500">
                    Amazon • Flipkart • Meesho
                  </p>
                </div>

              </div>

              <div className="flex gap-3">

                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={22}
                />

                <div>
                  <h4 className="font-bold">
                    Digital Marketing
                  </h4>

                  <p className="text-gray-500">
                    SEO • Ads • Branding
                  </p>
                </div>

              </div>

              <div className="flex gap-3">

                <CheckCircle
                  className="text-blue-600 mt-1"
                  size={22}
                />

                <div>
                  <h4 className="font-bold">
                    Website Development
                  </h4>

                  <p className="text-gray-500">
                    Responsive & Modern Design
                  </p>
                </div>

              </div>

            </div>

          </div>
                    {/* Right */}

          <div className="relative flex justify-center items-center">

            {/* Glow */}

            <div className="absolute w-[560px] h-[560px] rounded-full bg-blue-300/20 blur-[150px] pointer-events-none"></div>

            {/* Image */}

            <div className="relative overflow-hidden rounded-3xl">

              <img
                src={aboutImage}
                alt="About BizEngine"
                className="relative z-10 w-full max-w-xl lg:max-w-2xl object-contain drop-shadow-[0_35px_80px_rgba(37,99,235,0.18)] transition duration-500 hover:scale-105"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 72%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle at center, black 72%, transparent 100%)",
                }}
              />

              {/* Left Fade */}

              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent pointer-events-none"></div>

              {/* Right Fade */}

              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-blue-100 via-blue-100/80 to-transparent pointer-events-none"></div>

              {/* Bottom Fade */}

              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-100 via-blue-100/70 to-transparent pointer-events-none"></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;