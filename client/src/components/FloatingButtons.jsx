import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      <a
        href="tel:+917081970405"
        className="fixed bottom-24 right-5 bg-blue-600 text-white p-4 rounded-full shadow-xl z-50"
      >
        <Phone size={24}/>
      </a>

      <a
        href="https://wa.me/917081970405"
        className="fixed bottom-6 right-5 bg-green-500 text-white p-4 rounded-full shadow-xl z-50"
      >
        <MessageCircle size={24}/>
      </a>
    </>
  );
};

export default FloatingButtons;