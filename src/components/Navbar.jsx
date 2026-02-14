
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Heart, MapPin, ChevronRight, Zap } from 'lucide-react';

const LogoIcon = ({ className }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Background Circle Splash */}
    <circle cx="100" cy="100" r="85" fill="#f0f7ff" />
    
    {/* Main Machine Body - Dark Blue */}
    <rect x="45" y="65" width="110" height="75" rx="12" fill="#1e40af" transform="rotate(-15 100 100)" />
    <rect x="52" y="72" width="96" height="15" rx="4" fill="#ffffff" fillOpacity="0.2" transform="rotate(-15 100 100)" />
    
    {/* Splashes - Light Blue */}
    <path d="M40 135 C20 135 10 155 30 165 C50 175 65 155 75 145" fill="#0ea5e9" />
    <path d="M160 135 C180 135 190 155 170 165 C150 175 135 155 125 145" fill="#0ea5e9" />
    <path d="M100 160 C115 180 140 175 135 155 C130 145 110 140 100 160" fill="#0ea5e9" />
    
    {/* Circular Door - Dark Blue Ring */}
    <circle cx="100" cy="115" r="35" fill="#1e40af" />
    {/* Inner Water - Light Blue */}
    <circle cx="100" cy="115" r="28" fill="#ffffff" />
    <path d="M72 115 A28 28 0 0 0 128 115 Q100 135 72 115" fill="#0ea5e9" />
    
    {/* Bubbles */}
    <circle cx="95" cy="100" r="4" fill="#0ea5e9" opacity="0.6" />
    <circle cx="108" cy="105" r="3" fill="#0ea5e9" opacity="0.4" />
    <circle cx="102" cy="92" r="2.5" fill="#0ea5e9" opacity="0.8" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#showcase' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Custom Brand Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative w-14 h-14 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <LogoIcon className="w-full h-full drop-shadow-sm" />
              </div>
              
              <div className="ml-3 flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  Tjay<span className="text-blue-600">Kleen</span>
                </span>
                <span className="text-[9px] text-blue-500 font-bold uppercase tracking-[0.4em] mt-1.5 opacity-80">
                  Premium Care
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center bg-slate-100/80 p-1 rounded-2xl backdrop-blur-sm border border-slate-200/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-6 py-2.5 text-[13px] font-bold text-slate-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Area */}
            <div className="hidden md:flex items-center gap-6">
              <div className="hidden xl:flex items-center gap-3 pr-6 border-r border-slate-200">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Book Now</span>
                  <span className="text-sm font-black text-slate-800 leading-none">0800-TJAY-KLEEN</span>
                </div>
              </div>
              
              <button className="bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:scale-95">
                Schedule Pick-up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(true)}
                className="p-3 text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-sm active:scale-90"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-60 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div 
        className={`fixed top-0 right-0 h-full w-[80%] max-w-90 bg-white z-70 shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <div className="flex items-center gap-2">
              <span className="font-black text-slate-900 text-xl tracking-tighter">MENU</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-slate-900">
              <X size={28} />
            </button>
          </div>

          <div className="p-6 grow space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block p-4 bg-slate-50 rounded-2xl text-lg font-bold text-slate-700 hover:bg-blue-600 hover:text-white transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="p-8 bg-slate-900 rounded-t-[3rem]">
            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-base shadow-xl active:scale-95 transition-transform">
                Schedule Pick-up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
