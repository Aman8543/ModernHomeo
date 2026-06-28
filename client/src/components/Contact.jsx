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


      {/* <div className="rounded-[32px] overflow-hidden shadow-lg">
  <iframe
    title="clinic-location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1170948930426!2d82.7922267!3d27.496733600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39971b004260eaf1%3A0xae70a895edb6c0b!2sMordern%20homeo%20%26%20healthcare!5e0!3m2!1sen!2sin!4v1782645494699!5m2!1sen!2sin"
    width="100%"
    height="500"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
  />

  <a
    href="https://maps.app.goo.gl/kyZqw8VaMU3hyqTS7?g_st=awb"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center bg-blue-600 text-white py-3 font-semibold"
  >
    Open in Google Maps
  </a>
</div> */}




<div className="rounded-[32px] overflow-hidden shadow-lg">
  <a
    href="https://maps.app.goo.gl/kyZqw8VaMU3hyqTS7?g_st=awb"
    target="_blank"
    rel="noopener noreferrer"
  >
    <iframe
      title="clinic-location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.1170948930426!2d82.7922267!3d27.496733600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39971b004260eaf1%3A0xae70a895edb6c0b!2sMordern%20homeo%20%26%20healthcare!5e0!3m2!1sen!2sin!4v1782645494699!5m2!1sen!2sin"
      width="100%"
      height="500"
      style={{ border: 0, pointerEvents: "none" }}
      loading="lazy"
    />

    <a
    href="https://maps.app.goo.gl/kyZqw8VaMU3hyqTS7?g_st=awb"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-center bg-blue-600 text-white py-3 font-semibold"
  >
    Open in Google Maps
  </a>
  </a>
</div>

    </div>
  </div>
</section>


);
};

export default Contact;

