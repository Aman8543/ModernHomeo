import { Star } from "lucide-react";

const testimonials = [
{
name: "Rahul Sharma",
location: "Badhni",
review:
"I had been suffering from migraine for years. After treatment from Dr. Praveen Agrahari, my condition improved significantly.",
},
{
name: "Priya Verma",
location: "Shohratgarh",
review:
"Excellent consultation and very polite behavior. The treatment worked well for my allergy problem.",
},
{
name: "Amit Singh",
location: "Naugarh",
review:
"Professional and caring doctor. I highly recommend this clinic for homeopathic treatment.",
},
];

const Testimonials = () => {
return ( <section
   id="testimonials"
   className="py-24 bg-slate-50"
 > <div className="max-w-7xl mx-auto px-5">


    <div className="text-center mb-16">
      <p className="text-teal-600 font-semibold uppercase tracking-widest">
        Testimonials
      </p>

      <h2 className="text-4xl font-bold text-slate-800 mt-3">
        What Our Patients Say
      </h2>

      <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
        Trusted by families across Badhni and nearby areas for
        compassionate and effective homeopathic care.
      </p>
    </div>

    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p className="text-slate-600 leading-relaxed mb-8">
            "{testimonial.review}"
          </p>

          <div>
            <h3 className="font-semibold text-slate-800">
              {testimonial.name}
            </h3>

            <p className="text-slate-500 text-sm">
              {testimonial.location}
            </p>
          </div>
        </div>
      ))}

    </div> */}

    <div className="overflow-x-auto md:overflow-visible pb-4 scrollbar-hide">
  <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-max md:w-full">
    {testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="min-w-[320px] md:min-w-0 bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
      >
        <div className="flex gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <p className="text-slate-600 leading-relaxed mb-8">
          "{testimonial.review}"
        </p>

        <div>
          <h3 className="font-semibold text-slate-800">
            {testimonial.name}
          </h3>

          <p className="text-slate-500 text-sm">
            {testimonial.location}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  </div>
</section>


);
};

export default Testimonials;
