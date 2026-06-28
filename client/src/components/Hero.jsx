import doctorImage from "../assets/doctor.png";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-16">

        {/* Left */}
        <div className="flex-1">

          <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
           Trusted Homeopathy Care in Barhni - Reg. H041147
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 mt-6 leading-tight">
            Natural Healing with
            <span className="text-teal-700"> Personalized </span>
            Homeopathic Care
          </h1>

          <p className="text-slate-600 text-lg mt-6 leading-relaxed">
            Dr. Pravin Agrahari provides compassionate and effective
            homeopathic treatment for patients of all ages in Barhni
            and nearby areas.
          </p>

          <div className="flex items-center gap-3 mt-4 text-slate-600">
            <MapPin size={18}/>
            Barhni, Siddharth Nagar, Uttar Pradesh
          </div>

          <div className="flex gap-4 mt-8 flex-wrap">

            <a
              href="https://wa.me/917081970405"
              className="bg-teal-700 text-white px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-teal-800"
            >
              <MessageCircle size={20}/>
              WhatsApp
            </a>

            <a
              href="tel:+917081970405"
              className="border border-teal-700 text-teal-700 px-6 py-4 rounded-xl flex items-center gap-2 hover:bg-teal-50"
            >
              <Phone size={20}/>
              Call Now
            </a>

          </div>
        </div>

        {/* Right */}
        <div className="flex-1 h-[480px]  flex justify-center">
          <img
            src={doctorImage}
            alt="Doctor"
            className="w-[400px] h-[480px] object-cover rounded-[40px] shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;