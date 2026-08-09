import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
  href="https://wa.me/918938855925?text=Hello%20BizEngine%2C%20I%20want%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-all duration-300"
>
  <FaWhatsapp className="text-3xl" />
</a>
  );
}

export default WhatsAppButton;