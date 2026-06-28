


import React from "react";

import acne from "../assets/treatment/acne.png";
import basasir from "../assets/treatment/basasir.png";
import diabetes from "../assets/treatment/diabetes.png";
import gathiya from "../assets/treatment/gathiya.png";
import khujli from "../assets/treatment/khujli.png";
import paralysis from "../assets/treatment/paralysis.png";
import stone from "../assets/treatment/stone.png";
import whitedischarge from "../assets/treatment/whitedischarge.png";
import whitespot from "../assets/treatment/whitespot.png";
import woman from "../assets/treatment/woman.png";
import manshik from "../assets/treatment/manshik.png";
import others from "../assets/treatment/other.png";

// const treatments = [
//   {
//     title: "Bawaseer (Piles)",
//     description: "Bawaseer aur piles ke liye homeopathic ilaaj.",
//     image: basasir,
//   },
//   {
//     title: "Sugar (Diabetes)",
//     description: "Diabetes ko control karne ke liye treatment.",
//     image: diabetes,
//   },
//   {
//     title: "Lakwa (Paralysis)",
//     description: "Paralysis aur kamjori se judi samasyaon ke liye care.",
//     image: paralysis,
//   },
//   {
//     title: "Muhase (Acne)",
//     description: "Pimples aur skin problems ke liye treatment.",
//     image: acne,
//   },
//   {
//     title: "Gathiya",
//     description: "Joint pain aur arthritis ke liye ilaaj.",
//     image: gathiya,
//   },
//   {
//     title: "Safed Daag",
//     description: "Safed daag aur skin pigmentation ke liye treatment.",
//     image: whitespot,
//   },
//   {
//     title: "Pathri",
//     description: "Kidney stone aur pathri ki problem ke liye ilaaj.",
//     image: stone,
//   },
//   {
//     title: "Safed Pani",
//     description: "Mahilaon me white discharge ki samasya ke liye care.",
//     image: whitedischarge,
//   },
//   {
//     title: "Daad Khujli",
//     description: "Daad, khujli aur skin allergy ke liye treatment.",
//     image: khujli,
//   },
//   {
//     title: "Mahila Rog",
//     description: "Mahila swasthya aur hormonal problems ke liye treatment.",
//     image: woman,
//   },
//   {
//     title: "Manshik",
//     description: "Mansik tanav, chinta aur man se judi samasyaon ke liye homeopathic ilaaj.",
//     image: manshik,
//   },
//   {
//   title: "Anya Rog",
//   description:
//     "Mirgi, Faalij, Swapn Dosh, Sciatica, Asthma, sabhi prakaar ki ilaaj",
//   image: others,
// },
// ];

const treatments = [
  {
    title: "Piles (बवासीर)",
    description: "Homeopathic treatment for piles, hemorrhoids, and related discomfort.",
    image: basasir,
  },
  {
    title: "Diabetes (मधुमेह)",
    description: "Effective homeopathic care to help manage diabetes and related symptoms.",
    image: diabetes,
  },
  {
    title: "Paralysis (लकवा)",
    description: "Treatment and supportive care for paralysis and weakness-related conditions.",
    image: paralysis,
  },
  {
    title: "Acne (मुंहासे)",
    description: "Homeopathic treatment for acne, pimples, and other skin concerns.",
    image: acne,
  },
  {
    title: "Gout (गठिया)",
    description: "Care and treatment for joint pain, arthritis, and stiffness.",
    image: gathiya,
  },
  {
    title: "Vitiligo (सफेद दाग)",
    description: "Treatment for vitiligo, white patches, and skin pigmentation disorders.",
    image: whitespot,
  },
  {
    title: "Kidney Stones (पथरी)",
    description: "Homeopathic care for kidney stones and urinary tract issues.",
    image: stone,
  },
  {
    title: "White Discharge (सफेद पानी)",
    description: "Treatment for leucorrhoea and women's health-related concerns.",
    image: whitedischarge,
  },
  {
    title: "Ringworm & Itching (दाद-खुजली)",
    description: "Treatment for fungal infections, itching, and skin allergies.",
    image: khujli,
  },
  {
    title: "Women's Health (महिला रोग)",
    description: "Comprehensive care for women's health and hormonal disorders.",
    image: woman,
  },
  {
    title: "Mental Health (मानसिक रोग)",
    description: "Homeopathic treatment for stress, anxiety, and mental health concerns.",
    image: manshik,
  },
  {
    title: "Other Diseases (अन्य रोग)",
    description:
      "Treatment for epilepsy, paralysis, nightfall, sciatica, asthma, and various chronic diseases.",
    image: others,
  },
];

const Treatments = () => {
  return (
    <section
      id="treatments"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-teal-600 font-semibold uppercase tracking-widest">
            Our Treatment
          </p>

          <h2 className="text-4xl font-bold text-slate-800 mt-3">
            Homeopathic Treatment Available
          </h2>

          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Hum natural aur personalized homeopathic treatment ke zariye kai
            tarah ki bimariyon ka ilaaj pradan karte hain.
          </p>
        </div>
  {/* card */}
        <div className="overflow-x-auto pb-4 scrollbar-hide">
  <div className="grid grid-rows-2 grid-flow-col gap-6 w-max">
    {treatments.map((item, index) => (
      <div
        key={index}
        className="w-70 bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
      >
        {/* Image */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-44 object-cover"
        />

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-slate-800 text-lg mb-3">
            {item.title}
          </h3>

          <p className="text-slate-500 text-sm leading-relaxed">
            {item.description}
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

export default Treatments;


{/* Cards */}
        // <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        //   {treatments.map((item, index) => (
        //     <div
        //       key={index}
        //       className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
        //     >
        //       {/* Image */}
        //       <img
        //         src={item.image}
        //         alt={item.title}
        //         className="w-full h-44 object-cover"
        //       />

        //       {/* Content */}
        //       <div className="p-5">
        //         <h3 className="font-semibold text-slate-800 text-lg mb-3">
        //           {item.title}
        //         </h3>

        //         <p className="text-slate-500 text-sm leading-relaxed">
        //           {item.description}
        //         </p>
        //       </div>
        //     </div>
        //   ))}
        // </div>
