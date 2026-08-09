import whyChooseImage from "../../assets/images/whychoose/whychoose-business.png";
import {
  FaCheckCircle,
  FaHandshake,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaLightbulb,
} from "react-icons/fa";

function WhyChoose() {
  const features = [
    {
      icon: <FaHandshake />,
      title: "Trusted Business Partner",
      description:
        "We work as your long-term business partner and focus on sustainable growth.",
    },

    {
      icon: <FaRocket />,
      title: "Complete Business Solutions",
      description:
        "From business setup to online growth, everything is available under one roof.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Reliable & Transparent",
      description:
        "Honest guidance, transparent pricing and quality work with no hidden charges.",
    },

    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      description:
        "Fast communication and continuous support whenever your business needs help.",
    },

    {
      icon: <FaLightbulb />,
      title: "Growth Focused Strategy",
      description:
        "Every solution is planned to increase your brand visibility and business growth.",
    },

    {
      icon: <FaCheckCircle />,
      title: "Affordable Services",
      description:
        "Professional services at competitive pricing suitable for startups and businesses.",
    },
  ];

  return (
    <section
      id="whychoose"
      className="relative py-24 overflow-hidden bg-transparent"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div className="relative flex justify-center items-center">

            {/* Glow */}

            <div className="absolute w-[620px] h-[620px] rounded-full bg-blue-300/20 blur-[140px]"></div>

            {/* Image */}

            <div className="relative overflow-hidden rounded-[40px]">

              <img
                src={whyChooseImage}
                alt="Why Choose BizEngine"
                className="relative z-10 w-[115%] max-w-none object-contain drop-shadow-[0_35px_80px_rgba(37,99,235,0.18)] transition duration-500 hover:scale-105"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle at center, black 82%, transparent 100%)",
                  maskImage:
                    "radial-gradient(circle at center, black 82%, transparent 100%)",
                }}
              />

              {/* Left Fade */}

              <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-blue-50 via-blue-50/80 to-transparent pointer-events-none"></div>

              {/* Right Fade */}

              <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-blue-100 via-blue-100/80 to-transparent pointer-events-none"></div>

              {/* Bottom Fade */}

              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-100 via-blue-100/70 to-transparent pointer-events-none"></div>

            </div>

          </div>

          {/* Right */}

          <div>
                        <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
              Why Choose BizEngine
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-gray-900">

              Why Businesses

              <br />

              Trust

              <span className="text-blue-600"> BizEngine</span>

            </h2>

            <div className="mt-5 w-24 h-1 rounded-full bg-blue-600"></div>

            <p className="mt-8 text-lg leading-9 text-gray-600">

              We provide complete online business solutions with a focus on quality,
              transparency and long-term growth. Our goal is to help businesses
              establish, manage and expand successfully in the digital world.

            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => (

                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white/50 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                >

                  <div className="text-3xl text-blue-600 mb-4">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 leading-7">
                    {item.description}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;