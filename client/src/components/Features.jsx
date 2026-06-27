

import {
ShieldCheck,
HeartHandshake,
Leaf,
Clock3,
} from "lucide-react";

const features = [
{
icon: Leaf,
title: "Natural Treatment",
description:
"Safe and natural homeopathic medicines with minimal side effects.",
},
{
icon: HeartHandshake,
title: "Personalized Care",
description:
"Treatment plans tailored according to every patient's needs.",
},
{
icon: ShieldCheck,
title: "Trusted Experience",
description:
"Providing quality homeopathic care for patients in Barhni and nearby areas.",
},
{
icon: Clock3,
title: "Flexible Consultation",
description:
"Easy consultation through clinic visits, phone calls, and WhatsApp.",
},
];

const Features = () => {
return ( <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-5">


    <div className="text-center mb-14">
      <p className="text-teal-600 font-semibold uppercase tracking-wider">
        Why Choose Us
      </p>

      <h2 className="text-4xl font-bold text-slate-800 mt-3">
        Trusted Homeopathic Care
      </h2>

      <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
        We focus on personalized treatment, natural healing,
        and long-term wellness for every patient.
      </p>
    </div>

    {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 hover:shadow-xl transition duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
              <Icon size={32} className="text-teal-700" />
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              {feature.title}
            </h3>

            <p className="text-slate-500 leading-relaxed">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div> */}

    <div className="overflow-x-auto md:overflow-visible pb-4">
  <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-max md:w-full">
    {features.map((feature, index) => {
      const Icon = feature.icon;

      return (
        <div
          key={index}
          className="min-w-[280px] md:min-w-0 bg-white rounded-3xl shadow-sm border border-slate-100 p-8 hover:shadow-xl transition duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-teal-100 flex items-center justify-center mb-6">
            <Icon size={32} className="text-teal-700" />
          </div>

          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            {feature.title}
          </h3>

          <p className="text-slate-500 leading-relaxed">
            {feature.description}
          </p>
        </div>
      );
    })}
  </div>
</div>
  </div>
</section>

);
};

export default Features;
