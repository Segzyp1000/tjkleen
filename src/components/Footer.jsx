import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Facebook } from 'lucide-react';



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
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
               <span className="text-sm font-serif font-bold italic tracking-tighter shrink-0"><Facebook /></span>
               <span className="text-sm font-serif font-bold tracking-widest shrink-0">GQ</span>
               <span className="text-sm font-serif font-bold shrink-0">BAZAAR</span>
               <span className="text-sm font-serif font-bold italic shrink-0">The New York Times</span>
            </div>
            
            <div className="flex items-center gap-4 bg-stone-900 text-white px-8 py-4 rounded-full group cursor-pointer hover:bg-stone-800 transition-colors">
              <ShieldCheck className="text-emerald-400" size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">View all 1,240 verified reviews</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </section>      
        </footer>
  )
}

export default Footer