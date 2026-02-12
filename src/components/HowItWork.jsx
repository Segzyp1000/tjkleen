import { WORKFLOW_STEPS } from "../data";




export default function HowItWorks() {
  return (
      <main className="max-w-5xl mx-auto px-6 mt-16 ">
        {/* HOW IT WORKS SECTION */}
        <section id="how-it-works" className="mb-40">
          <div className="text-center mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] text-stone-400 font-semibold mb-4">The Experience</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold"> How We Work </h3>
          </div>

          <div className="relative">
            {/* Connection Line (Hidden on mobile) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-stone-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {WORKFLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="group flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Icon Container */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 rounded-3xl ${step.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-sm border border-white/50`}>
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-stone-900 text-white text-xs flex items-center justify-center font-bold border-4 border-[#FDFCFB]">
                        {step.number}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xl font-serif mb-4 text-stone-900 group-hover:text-stone-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-stone-500 text-sm leading-relaxed max-w-60">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
  );
}