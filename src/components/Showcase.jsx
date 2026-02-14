import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import { ChevronRight, Droplets, Sparkles, Clock, ShieldCheck, ChevronLeft } from 'lucide-react';



 const slides = [
 {
    // Professional modern laundry setup
    url: "https://unsplash.com/photos/a-woman-is-holding-a-towel-in-front-of-a-washing-machine-0mwonQtgH4E?q=80&w=2070&auto=format&fit=crop",
    title: "Premium Care",
    description: "Modern machinery for gentle fabric treatment."
  },
{
    // High-end Washing Machine (The new Artisan Care image)
    url: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop",
    title: "Artisan Washing",
    description: "Customized cycles for delicate embroidery and traditional fabrics."
  },
  {
    // Sharp professional suit
    url: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=2080&auto=format&fit=crop",
    title: "Pristine Suits",
    description: "Crisp finishing for your professional image."
  },
  {
    url: "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=1915&auto=format&fit=crop",
    title: "Fabric Freshness",
    description: "Preserving the life of every fiber."
  }
];

const Showcase = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

 
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 mt-24">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content: Text & Actions */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
                <Sparkles size={14} className="text-blue-500" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                  Premium Fabric Care
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-[1.15] tracking-tight">
                Welcome to <br />
                <span className="font-semibold text-blue-600">Tjay Kleen.</span>
              </h1>

              <p className="text-base md:text-lg text-slate-500 font-light leading-relaxed max-w-lg">
                 Bringing sparkles to life, responsibly. Your clothes, cleaned with care.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
  to="/#services"
  className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-blue-600 transition-all duration-300 shadow-sm inline-flex items-center justify-center"
>
  View How We Work
</Link>


            </div>

            {/* Calm Trust Indicators */}
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-slate-100">
              <div className="space-y-2">
                <Clock size={18} className="text-slate-400" />
                <p className="text-xs font-medium text-slate-800">24h Return</p>
                <p className="text-[10px] text-slate-400">Standard service</p>
              </div>
              <div className="space-y-2">
                <Droplets size={18} className="text-slate-400" />
                <p className="text-xs font-medium text-slate-800">Eco-Friendly</p>
                <p className="text-[10px] text-slate-400">Non-toxic solvents</p>
              </div>
              <div className="space-y-2">
                <ShieldCheck size={18} className="text-slate-400" />
                <p className="text-xs font-medium text-slate-800">Insured Care</p>
                <p className="text-[10px] text-slate-400">Your items are safe</p>
              </div>
            </div>
          </div>

           {/* Right Content: Animated Visual Showcase */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            <div className="relative z-10 aspect-4/5 overflow-hidden shadow-2xl shadow-slate-200 rounded-4xl  md:rounded-[3rem] bg-slate-100 group">
              
              {/* Image Slides */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                    index === currentSlide 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-110 rotate-1'
                  }`}
                >
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                </div>
              ))}

              {/* Slide Navigation Buttons */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
                <button 
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {/* Progress Indicators */}
                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <div 
                      key={index}
                      className="h-1 w-8 rounded-full bg-white/20 overflow-hidden"
                    >
                      <div 
                        className={`h-full bg-white transition-all duration-5000ms ease-linear ${
                          index === currentSlide ? 'w-full' : 'w-0'
                        }`}
                        style={{ transitionDuration: index === currentSlide ? '5000ms' : '0ms' }}
                      />
                    </div>
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Content Label for Current Slide */}
              <div className="absolute top-8 left-8 z-20 text-white">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70 mb-1">Our Expertise</p>
                <h3 className="text-xl font-medium">{slides[currentSlide].title}</h3>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-slate-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 "/>
            
            {/* Minimalist Floating Label */}
            <div className="absolute bottom-10 -right-6 z-20 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-slate-50 max-w-50animate-bounce-subtle ">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">Live Operations</span>
              </div>
          
            </div> 
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}} />
    </section>
  );
};

export default Showcase;
