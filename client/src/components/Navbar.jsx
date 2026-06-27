// import { Menu, Phone, MessageCircle, Leaf } from "lucide-react";

// const Navbar = () => {
//   return (
//     <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center">
//             <Leaf className="text-white" size={24} />
//           </div>

//           <div>
//             <h1 className="font-bold text-slate-800 text-lg">
//               Dr. Pravin Agrahari
//             </h1>

//             <p className="text-sm text-slate-500">
//               Modern Homeo and Health Care
//             </p>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex gap-8 text-slate-600 font-medium">
//           <a href="#home" className="hover:text-teal-700 transition">Home</a>
//           <a href="#about" className="hover:text-teal-700 transition">About</a>
//           <a href="#treatments" className="hover:text-teal-700 transition">Treatments</a>
//           <a href="#testimonials" className="hover:text-teal-700 transition">Reviews</a>
//           <a href="#contact" className="hover:text-teal-700 transition">Contact</a>
//         </nav>

//         {/* Actions */}
//         <div className="flex gap-2">

//           <a
//             href="tel:+917081970405"
//             className="hidden md:flex items-center gap-2 px-4 py-2 border border-teal-700 rounded-full text-teal-700 hover:bg-teal-50"
//           >
//             <Phone size={18}/>
//             Call
//           </a>

//           <a
//             href="https://wa.me/917081970405"
//             target="_blank"
//             className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition"
//           >
//             <MessageCircle size={18}/>
//             WhatsApp
//           </a>

//           <button className="md:hidden p-2">
//             <Menu size={24}/>
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Leaf,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-15 h-15 rounded-full bg-teal-700 flex items-center justify-center">
            {/* <Leaf className="text-white" size={24} /> */}
            <img size={24} src="./logo.png" alt="logo" />
          </div>

          <div>
            <h1 className="font-bold text-slate-800 text-lg">
              Dr. Pravin Agrahari
            </h1>

            <p className="text-sm text-slate-500">
              Modern Homeo and Health Care
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-slate-600 font-medium">
          <a href="#home" className="hover:text-teal-700 transition">
            Home
          </a>
          <a href="#about" className="hover:text-teal-700 transition">
            About
          </a>
          <a href="#treatments" className="hover:text-teal-700 transition">
            Treatments
          </a>
          <a href="#testimonials" className="hover:text-teal-700 transition">
            Reviews
          </a>
          <a href="#contact" className="hover:text-teal-700 transition">
            Contact
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="tel:+917081970405"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-teal-700 rounded-full text-teal-700 hover:bg-teal-50"
          >
            <Phone size={18} />
            Call
          </a>

          <a
            href="https://wa.me/917081970405"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4 text-slate-700 font-medium">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700"
            >
              About
            </a>

            <a
              href="#treatments"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700"
            >
              Treatments
            </a>

            <a
              href="#testimonials"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700"
            >
              Reviews
            </a>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-teal-700"
            >
              Contact
            </a>

            <div className="flex gap-3 pt-4 border-t">
              <a
                href="tel:+917081970405"
                className="flex-1 flex items-center justify-center gap-2 border border-teal-700 text-teal-700 py-3 rounded-xl"
              >
                <Phone size={18} />
                Call
              </a>

              <a
                href="https://wa.me/917081970405"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-teal-700 text-white py-3 rounded-xl"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;