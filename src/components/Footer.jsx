import { Facebook, PenOff, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="mt-20 border-t border-stone-200 bg-white">
        <section className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Top Message */}
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 font-semibold mb-4">
              Thank you for choosing us
            </h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
              Bringing sparkles to life, responsibly. Your clothes, cleaned with care.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-between items-center gap-10">
            <div className="flex items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer">
              
              <Facebook className="w-5 h-5" />
              <Instagram className="w-5 h-5" />
              <PenOff className="w-5 h-5" />
              
            </div>

            <p className="text-sm text-stone-400 text-center md:text-right">
              © {new Date().getFullYear()} TjayKleen. All rights reserved.
            </p>
          </div>

        </section>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/2348000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-300/40 hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </>
  );
};

export default Footer;