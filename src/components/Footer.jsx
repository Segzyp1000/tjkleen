import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Facebook, PenOff,Phone, Instagram} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
   <footer className="mt-20 border-t border-stone-200">
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 font-semibold mb-4">Thank you for choosing us</h2>
            <p className="text-lg text-stone-500 max-w-2xl mx-auto">
                Bringing sparkles to life, responsibly. Your Clothes, cleaned with care
            </p>
          </div>
          <div className="flex  justify-between items-center gap-10">
            <div className="flex items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
               <span className="text-sm font-serif font-bold italic tracking-tighter shrink-0"><Facebook /></span>
               <span className="text-sm font-serif font-bold tracking-widest shrink-0"><Instagram /></span>
               <span className="text-sm font-serif font-bold shrink-0"><PenOff /></span>
  
            </div>
            
            {/* FIXED CALL TO ACTION */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none">
        <div className="max-w-4xl mx-auto flex justify-center md:justify-end">
          <div className="flex items-center gap-4 bg-stone-900 text-white px-8 py-4 rounded-full shadow-2xl shadow-stone-400/20 group cursor-pointer hover:bg-stone-800 transition-all duration-300 pointer-events-auto border border-white/10 backdrop-blur-sm">
            <FaWhatsapp className="text-emerald-400" size={20} />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]"><Phone className="inline mr-1" size={12} /> 1-800-555-1234</span>
          </div>
        </div>
      </div>
            </div>  
        </section>      
        </footer>
  )
}

export default Footer    