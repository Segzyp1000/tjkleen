import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Sparkles,
  Waves,
  Heart,
  Wind,
  Home,
  Truck,
} from "lucide-react";
import { servicesData } from "../data";

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const getIcon = (id) => {
    const icons = {
      1: <Sparkles className="w-6 h-6" />,
      2: <Waves className="w-6 h-6" />,
      3: <Heart className="w-6 h-6" />,
      4: <Wind className="w-6 h-6" />,
      5: <Home className="w-6 h-6" />,
      6: <Truck className="w-6 h-6" />,
    };
    return icons[id] || <Zap className="w-6 h-6" />;
  };

  return (
    <div
      className="w-full min-h-screen bg-gray-50 font-sans text-slate-900 mt-16"
      id="services"
    >
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
            <Zap size={14} className="text-blue-500 fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600">
              Exclusive Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
            Meticulous care for <br />
            <span className="font-semibold italic text-blue-600">
              every fiber.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-500 text-lg font-light leading-relaxed">
            We don't just clean clothes; we restore them. Discover our range of
            specialized treatments tailored to your wardrobe's specific needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative flex flex-col h-full bg-white rounded-[2.5rem] p-8 border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-2 overflow-hidden"
              >
                {/* Visual Index Number */}
                <span className="absolute -top-4 -right-2 text-[120px] font-black text-slate-50 leading-none pointer-events-none group-hover:text-blue-50/50 transition-colors duration-500">
                  {index + 1}
                </span>

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${service.lightColor} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    <div className={service.color.replace("bg-", "text-")}>
                      {getIcon(service.id)}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 font-light leading-relaxed mb-8 text-sm group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>

                  {/* Numbered Features List */}
                  <div className="space-y-4 pt-6 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                      Service Includes
                    </p>

                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-4 group/item"
                      >
                        <div className="shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
                          {fIdx + 1}
                        </div>
                        <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link (Now Using React Router) */}
                <div className="mt-10 pt-6 flex items-center justify-between border-t border-slate-50">
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-blue-600 transition-colors"
                  >
                    Book Now
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <div
                    className={`w-2 h-2 rounded-full ${service.color} transition-all duration-500 group-hover:scale-[2.5]`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;