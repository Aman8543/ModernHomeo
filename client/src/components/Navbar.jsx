import { Menu, Phone, MessageCircle, Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-teal-700 flex items-center justify-center">
            <Leaf className="text-white" size={24} />
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
          <a href="#home" className="hover:text-teal-700 transition">Home</a>
          <a href="#about" className="hover:text-teal-700 transition">About</a>
          <a href="#treatments" className="hover:text-teal-700 transition">Treatments</a>
          <a href="#testimonials" className="hover:text-teal-700 transition">Reviews</a>
          <a href="#contact" className="hover:text-teal-700 transition">Contact</a>
        </nav>

        {/* Actions */}
        <div className="flex gap-2">

          <a
            href="tel:+917081970405"
            className="hidden md:flex items-center gap-2 px-4 py-2 border border-teal-700 rounded-full text-teal-700 hover:bg-teal-50"
          >
            <Phone size={18}/>
            Call
          </a>

          <a
            href="https://wa.me/917081970405"
            target="_blank"
            className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full hover:bg-teal-800 transition"
          >
            <MessageCircle size={18}/>
            WhatsApp
          </a>

          <button className="md:hidden p-2">
            <Menu size={24}/>
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;