import doctorImage from "../assets/doctor.png";
import { GraduationCap, MapPin, Award } from "lucide-react";

const About = () => {
return ( <section
   id="about"
   className="py-20 bg-slate-50"
 > <div className="max-w-7xl mx-auto px-5"> <div className="grid lg:grid-cols-2 gap-16 items-center">


      {/* Doctor Image */}
      <div className="flex h-[500px] justify-center">
        <img
          src={doctorImage}
          alt="Dr Pravin Agrahari"
          className="w-[400px] object-cover max-w-md rounded-[32px] shadow-2xl object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <p className="text-teal-600 font-semibold uppercase tracking-wider">
          About Doctor
        </p>

        <h2 className="text-4xl font-bold text-slate-800 mt-3">
          Dr. Pravin Agrahari
        </h2>

        <p className="text-lg text-teal-700 font-medium mt-2">
          BHMS | HERF | PREACH
        </p>

        <p className="text-slate-600 mt-6 leading-relaxed">
          Dr. Pravin Agrahari is dedicated to providing
          personalized and effective homeopathic treatment
          for patients of all age groups. His approach focuses
          on understanding the root cause of illness and
          promoting natural healing with safe and gentle remedies.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mt-10">

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <GraduationCap
              className="text-teal-700 mb-3"
              size={32}
            />
            <h3 className="font-semibold text-slate-800">
              Qualified Doctor
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              BHMS, HERF, PREACH Certified
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <Award
              className="text-teal-700 mb-3"
              size={32}
            />
            <h3 className="font-semibold text-slate-800">
              Experience
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              5+ Years
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <MapPin
              className="text-teal-700 mb-3"
              size={32}
            />
            <h3 className="font-semibold text-slate-800">
              Location
            </h3>
            <p className="text-slate-500 text-sm mt-2">
              Barhni, UP
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


);
};

export default About;
