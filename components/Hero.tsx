
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="mesh-gradient"></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-8 stagger-reveal">
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold-500"></span>
            <span className="text-[10px] font-display uppercase tracking-[0.5em] text-gold-500">
              ЮРИДИЧЕСКАЯ ПРАКТИКА С 2000 ГОДА
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-display font-black mb-8 leading-[1.1] md:leading-[0.85] text-white tracking-tighter uppercase">
            <span className="whitespace-nowrap">ИСЛАНД</span><br />
            <span className="text-outline hover:text-gold-500 transition-all duration-700 whitespace-nowrap">ВОСТОК</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end gap-12 mt-16">
            <p className="max-w-md text-xl text-slate-400 font-light leading-relaxed border-l-2 border-gold-500/30 pl-8">
              Мы не просто консультируем. Мы выигрываем дела, которые другие считают безнадежными. Ваша защита — наша репутация.
            </p>
            
            <div className="flex flex-col gap-4">
              <a href="#services" className="group relative px-12 py-6 bg-gold-600 text-white font-bold overflow-hidden transition-all hover:bg-gold-500 shadow-2xl shadow-gold-600/30">
                <span className="relative z-10 uppercase tracking-widest text-xs">Все направления</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=79089788919&text=Нужна%20консультация" 
                target="_blank"
                className="text-[10px] uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors text-center py-2 underline underline-offset-8 decoration-gold-500/30"
              >
                Бесплатный разбор дела →
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block">
          <div className="relative group">
            <div className="absolute -inset-4 border border-gold-500/10 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000"></div>
            <div className="aspect-[2/3] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                alt="Law Authority" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-12 -left-12 glass p-10 min-w-[320px]">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-12 h-12 rounded-full bg-gold-600 flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-sm uppercase tracking-widest text-white font-bold">92% Успеха</p>
              </div>
              <p className="text-[11px] text-slate-400 uppercase leading-relaxed tracking-wider">Статистика выигранных дел в судах Приморского края за последний год.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-6 hidden md:flex items-center gap-6 rotate-90 origin-left text-slate-800 text-[10px] tracking-[1em] uppercase">
        <span>Листайте ниже</span>
        <div className="w-20 h-px bg-slate-800"></div>
      </div>
    </section>
  );
};

export default Hero;
