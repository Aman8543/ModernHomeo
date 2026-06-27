import {
MapPin,
Phone,
MessageCircle,
Clock,
Navigation,
} from "lucide-react";

const Contact = () => {
return ( <section
   id="contact"
   className="py-24 bg-white"
 > <div className="max-w-7xl mx-auto px-5">


    <div className="text-center mb-16">
      <p className="text-teal-600 font-semibold uppercase tracking-widest">
        Contact Us
      </p>

      <h2 className="text-4xl font-bold text-slate-800 mt-3">
        Visit Our Clinic
      </h2>

      <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
        We are here to help you with personalized and effective
        homeopathic treatment.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Left Card */}
      <div className="bg-slate-50 rounded-[32px] p-8 shadow-sm">

        <div className="flex items-start gap-4 mb-8">
          <MapPin className="text-teal-700 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">
              Clinic Address
            </h3>
            <p className="text-slate-500 mt-2">
              Modern Homeo and Health Care,
              Ramjanki road,
              Barhni, Siddharth Nagar,
              Uttar Pradesh, India
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-8">
          <Phone className="text-teal-700 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">
              Phone Number
            </h3>
            <p className="text-slate-500 mt-2">
              +917081970405
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-8">
          <MessageCircle className="text-teal-700 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">
              WhatsApp
            </h3>
            <p className="text-slate-500 mt-2">
              +917081970405
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 mb-10">
          <Clock className="text-teal-700 mt-1" />
          <div>
            <h3 className="font-semibold text-slate-800">
              Clinic Timings
            </h3>
            <p className="text-slate-500 mt-2">
              Monday - Sunday
              <br />
              9:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-3 bg-teal-700 text-white px-6 py-4 rounded-2xl hover:bg-teal-800 transition"
        >
          <Navigation size={20} />
          Get Directions
        </a>

      </div>

      {/* Google Map */}
      {/* <div className="rounded-[32px] overflow-hidden shadow-lg min-h-[500px]">
        <iframe
          title="clinic-location"
          src="https://www.google.com/maps/embed?pb="
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div> */}

    </div>
  </div>
</section>


);
};

export default Contact;
