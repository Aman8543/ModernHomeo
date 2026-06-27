import { Phone, MessageCircle, Clock, MapPin } from "lucide-react";

const Appointment = () => {
return ( <section
   id="appointment"
   className="py-24 bg-gradient-to-r from-teal-700 to-emerald-700"
 > <div className="max-w-6xl mx-auto px-5">


    <div className="bg-white rounded-[40px] p-10 md:p-16 shadow-2xl">

      <div className="text-center">

        <span className="inline-block px-5 py-2 rounded-full bg-teal-100 text-teal-700 font-medium">
          Book Consultation
        </span>

        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-6">
          Book Your Appointment Today
        </h2>

        <p className="text-slate-500 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
          Get personalized homeopathic treatment from
          Dr. Pravin Agrahari. Contact us directly via
          WhatsApp or phone call for quick appointment booking.
        </p>

        {/* Clinic Information */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">

          <div className="flex items-center gap-3 text-slate-600">
            <Clock className="text-teal-700" />
            <span>Mon - sun : 9:00 AM - 7:00 PM</span>
          </div>

          <div className="flex items-center gap-3 text-slate-600">
            <MapPin className="text-teal-700" />
            <span>Ramjanaki road Barhni, Siddharth Nagar, UP</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

          <a
            href="https://wa.me/917081970405"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold text-lg transition duration-300 shadow-lg"
          >
            <MessageCircle size={24} />
            Book on WhatsApp
          </a>

          <a
            href="tel:+917081970405"
            className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-teal-700 text-teal-700 hover:bg-teal-50 font-semibold text-lg transition duration-300"
          >
            <Phone size={24} />
            Call Now
          </a>

        </div>

        <p className="text-slate-400 text-sm mt-8">
          Appointment confirmation will be provided via call or WhatsApp.
        </p>

      </div>

    </div>

  </div>
</section>


);
};

export default Appointment;
