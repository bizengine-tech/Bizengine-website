import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_gw0k88s",
        "template_k7heh6l",
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "etS6cZjkOguq9eaBE"
      )
      .then(() => {
        alert("✅ Thank you! Your inquiry has been sent successfully.");

        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((error) => {
        console.error(error);

        alert("❌ Failed to send inquiry. Please try again.");

        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-transparent"
    >

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-5">
            Let's Build Your Business Together
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Have a project or business idea? Contact us today and we'll help
            you choose the right solution for your business.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* Contact Details */}

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">

            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-4">

                <FaPhoneAlt className="text-blue-600 text-2xl" />

                <div>

                  <h4 className="font-semibold text-blue-600">
                    Phone
                  </h4>

                  <p className="text-gray-600">
                    +91 8938855925
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaWhatsapp className="text-green-500 text-2xl" />

                <div>

                  <h4 className="font-semibold text-blue-600">
                    WhatsApp
                  </h4>

                  <p className="text-gray-600">
                    +91 8938855925
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaEnvelope className="text-red-500 text-2xl" />

                <div>

                  <h4 className="font-semibold text-blue-600">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    bizengine10@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <FaMapMarkerAlt className="text-blue-600 text-2xl" />

                <div>

                  <h4 className="font-semibold text-blue-600">
                    Address
                  </h4>

                  <p className="text-gray-600">
                    Meerut, Uttar Pradesh, India
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">

            <form onSubmit={sendEmail} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:border-blue-600 outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:border-blue-600 outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:border-blue-600 outline-none"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:border-blue-600 outline-none"
              >

                <option value="">Select Service</option>
                <option>Website Development</option>
                <option>Digital Marketing</option>
                <option>E-Commerce Setup</option>
                <option>B2B Business Setup</option>
                <option>GST Registration</option>
                <option>Social Media Management</option>
                <option>Business Consultation</option>
                <option>Complete Business Solutions</option>

              </select>

              <textarea
                rows="5"
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 focus:border-blue-600 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300 font-semibold"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

            </form>

          </div>

        </div>
                {/* Google Map */}

        <div className="mt-16">

          <iframe
            title="BizEngine Location"
            src="https://www.google.com/maps?q=Meerut,Uttar%20Pradesh&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-3xl shadow-2xl border border-white/50"
          ></iframe>

        </div>

      </div>

    </section>
  );
}

export default Contact;