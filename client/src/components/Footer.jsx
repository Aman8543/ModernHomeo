import {
Phone,
MessageCircle,
MapPin,
Clock,
HeartPulse,
} from "lucide-react";

const Footer = () => {
return ( <footer className="bg-slate-900 text-slate-300 pt-16 pb-8"> <div className="max-w-7xl mx-auto px-5">


    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Clinic Info */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <HeartPulse className="text-teal-400" size={32} />

          <div>
            <h3 className="text-xl font-bold text-white">
              Dr. Praveen Agrahari
            </h3>

            <p className="text-sm text-slate-400">
              Modern Homeopathy
            </p>
          </div>
        </div>

        <p className="text-slate-400 leading-relaxed">
          Providing trusted and personalized homeopathic
          treatment for patients in Badhni and nearby areas.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-white font-semibold mb-5">
          Quick Links
        </h3>

        <div className="flex flex-col gap-3">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#treatments">Treatments</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className="text-white font-semibold mb-5">
          Contact
        </h3>

        <div className="space-y-4">

          <div className="flex gap-3">
            <Phone size={18} className="text-teal-400 mt-1" />
            <span>+917081970405</span>
          </div>

          <div className="flex gap-3">
            <MessageCircle size={18} className="text-teal-400 mt-1" />
            <span>WhatsApp Available</span>
          </div>

          <div className="flex gap-3">
            <MapPin size={18} className="text-teal-400 mt-1" />
            <span>Barhni, Siddharth Nagar, UP</span>
          </div>

        </div>
      </div>

      {/* Clinic Timings */}
      <div>
        <h3 className="text-white font-semibold mb-5">
          Clinic Hours
        </h3>

        <div className="space-y-4">

          <div className="flex gap-3">
            <Clock size={18} className="text-teal-400 mt-1" />
            <div>
              <p>Monday - Sunday</p>
              <p className="text-slate-400">
                9:00 AM - 7:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>

    
    {/* Bottom Footer */}
<div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
  <p className="text-center md:text-left">
    © {new Date().getFullYear()} Dr. Pravin Agrahari Modern Homeopathy.
    All Rights Reserved.
  </p>

  <p className="text-center md:text-right">
    Website Designed & Developed by{" "}
    <a
      href="https://aman-agrahari-portfolio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-teal-400 hover:text-teal-300 font-medium transition"
    >
      Aman Agrahari
    </a>
  </p>
</div>

  </div>
</footer>


);
};

export default Footer;
