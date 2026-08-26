import logo from "../assets/images/logos/bizengine-logo.png";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      <header className="bg-white border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/" aria-label="BizEngine home">
            <img
              src={logo}
              alt="BizEngine"
              className="h-16 w-auto object-contain"
            />
          </a>
          <a
            href="/"
            className="text-blue-600 font-semibold hover:text-blue-700 transition"
          >
            Back to home
          </a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <p className="text-blue-600 uppercase tracking-widest font-semibold">
            BizEngine
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-4">Last updated: August 26, 2026</p>

          <div className="mt-10 space-y-8 leading-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Information We Collect
              </h2>
              <p>
                When you contact BizEngine, we may collect the name, phone
                number, email address, selected service, and message that you
                provide. We may also receive basic technical information that
                your browser sends when you visit this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                How We Use Your Information
              </h2>
              <p>
                We use your information to respond to enquiries, understand
                your requirements, provide requested services, communicate
                about your project, and improve our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                WhatsApp Enquiries
              </h2>
              <p>
                Submitting the contact form opens WhatsApp with a prefilled
                message. Your information is sent to the WhatsApp account you
                choose to message and is also subject to WhatsApp&apos;s privacy
                policy and terms. Please review WhatsApp&apos;s policies before
                submitting personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Sharing of Information
              </h2>
              <p>
                We do not sell or rent your personal information. We may share
                information with service providers when necessary to operate
                our website, communicate with you, or deliver requested
                services, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Cookies and Third-Party Services
              </h2>
              <p>
                This website may use essential technologies and third-party
                services, such as embedded Google Maps and WhatsApp links.
                Those services may process information according to their own
                privacy policies. We do not use these services to sell your
                personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Data Security and Retention
              </h2>
              <p>
                We take reasonable steps to protect information shared with us
                and retain it only for as long as needed for the purposes
                described in this policy, to provide services, resolve issues,
                or meet legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your Choices
              </h2>
              <p>
                You may ask us to access, correct, or delete personal
                information you have shared, subject to applicable law. You
                can contact us to make a request or ask questions about this
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Policy Updates
              </h2>
              <p>
                We may update this Privacy Policy from time to time. The
                updated version will be posted on this page with a revised
                date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p>
                For privacy questions or requests, contact BizEngine at{" "}
                <a
                  href="mailto:bizengine10@gmail.com"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  bizengine10@gmail.com
                </a>{" "}
                or call +91 8938855925.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
