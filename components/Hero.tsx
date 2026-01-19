
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Плавное затухание и легкое масштабирование при прокрутке
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 bg-[#020617] overflow-hidden"
    >
      {/* 
        Background Image Container 
        Используем motion.div для плавного управления прозрачностью и масштабом
      */}
      <motion.div 
        style={{ opacity, scale }}
        className="fixed top-0 right-0 w-full lg:w-3/4 h-full z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover grayscale opacity-40 lg:opacity-60 transition-opacity duration-1000" 
          alt="Правосудие" 
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          style={{ y }}
          className="max-w-6xl stagger-reveal"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-gold-500"></span>
            <span className="text-[10px] font-display uppercase tracking-[0.5em] text-gold-500">
              ЮРИДИЧЕСКАЯ ПРАКТИКА С 2000 ГОДА
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-display font-black mb-8 leading-[0.9] text-white tracking-tighter uppercase">
            <span className="whitespace-nowrap inline-block">ИСЛАНД</span><br />
            <span className="text-outline hover:text-gold-500 transition-all duration-700 whitespace-nowrap inline-block">ВОСТОК</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end gap-12 mt-12 md:mt-24">
            <div className="max-w-md">
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed border-l-2 border-gold-500 pl-8 mb-8">
                Мы не просто консультируем. Мы выигрываем дела, которые другие считают безнадежными. Ваша защита — наша репутация.
              </p>
              <div className="flex items-center gap-6 pl-8">
                 <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-white tracking-tighter">92%</span>
                    <span className="text-[8px] uppercase tracking-widest text-slate-500">Успешных дел</span>
                 </div>
                 <div className="w-px h-8 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-display font-bold text-white tracking-tighter">25+</span>
                    <span className="text-[8px] uppercase tracking-widest text-slate-500">Лет опыта</span>
                 </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 ml-auto md:ml-0">
              <a href="#services" className="group relative px-16 py-8 bg-gold-600 text-white font-bold overflow-hidden transition-all hover:bg-gold-500 shadow-[0_20px_50px_rgba(217,119,6,0.3)]">
                <span className="relative z-10 uppercase tracking-[0.3em] text-xs">Все направления</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=79089788919&text=Нужна%20консультация" 
                target="_blank"
                className="text-[10px] uppercase tracking-[0.4em] text-slate-400 hover:text-white transition-colors text-center py-2 underline underline-offset-8 decoration-gold-500/30"
              >
                Бесплатный разбор дела →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Stylish Scroll Indicator Arrow */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold-500/50 mb-2"></div>
          <svg 
            className="w-6 h-6 text-gold-500/50" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
