import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data";


const TestimonialCard = ({ name, role, content, service }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col gap-6 hover:shadow-md transition-shadow">
    <div className="flex gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
    </div>
    <p className="text-stone-700 font-serif text-sm leading-relaxed italic">"{content}"</p>
    <div className="flex items-center justify-between mt-auto pt-6 border-t border-stone-50">
      <div>
        <h5 className="text-sm font-semibold text-stone-900">{name}</h5>
        <p className="text-stone-400 text-xs uppercase tracking-widest">{role}</p>
      </div>
      <div className="px-3 py-1 bg-stone-50 rounded-full text-[10px] font-bold text-stone-500 uppercase">
        {service}
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-slate-50 text-stone-900 font-sans antialiased overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24">
        {/* TESTIMONIALS SECTION */}
        <section id="testimonials" className="mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 font-semibold mb-4 text-left">Testimonials</h2>
              <span className="text-4xl md:text-5xl font-serif">What our </span> <span className="text-4xl md:text-5xl font-serif font-bold text-blue-600">clients say.</span>
            </div>
            <div className="flex gap-4">
               <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200"></div>
                  ))}
               </div>
               <div className="text-xs text-stone-400">
                  <p className="font-bold text-stone-900">100+ Clients</p>
                  <p>Trust us weekly</p>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={idx} {...t} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}