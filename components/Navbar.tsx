
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    setIsMenuOpen(false);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled || isMenuOpen ? 'bg-slate-950/90 backdrop-blur-xl py-6 border-b border-white/5' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 group relative overflow-hidden"
          >
            <div className="relative z-10">
              <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white uppercase flex items-center gap-2">
                ИСЛАНД <span className="text-gold-500 italic font-serif">В</span>
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map(link => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative text-[10px] font-display uppercase tracking-[0.4em] text-slate-400 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold-500 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
            <a href="tel:+79089788919" className="px-10 py-4 bg-white/5 border border-white/10 text-white text-[10px] font-display uppercase tracking-widest hover:bg-gold-600 hover:border-gold-600 transition-all duration-500">
              Срочная помощь
            </a>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white w-10 h-10 flex items-center justify-center border border-white/10 relative z-[60]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-px bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : 'w-full'}`}></span>
              <span className={`h-px bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-full'}`}></span>
              <span className={`h-px bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : 'w-full'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[40] bg-slate-950 transition-all duration-700 md:hidden flex flex-col ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
           <svg className="w-96 h-96 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45L19.22 19H4.78L12 5.45zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" /></svg>
        </div>
        
        {/* Adjusted padding-top and removed justify-center to prevent clipping in landscape */}
        <div className="flex-grow flex flex-col items-center px-6 pt-24 pb-12 overflow-y-auto">
          <div className="flex flex-col items-center space-y-6 sm:space-y-10 w-full max-w-sm my-auto">
            {NAV_LINKS.map((link, idx) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-3xl sm:text-5xl font-display font-black uppercase tracking-tighter text-white hover:text-gold-500 transition-colors text-center block w-full border-b border-white/5 pb-4 sm:pb-6 last:border-0"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-6 sm:pt-10 flex flex-col items-center gap-6 sm:gap-8 w-full">
              <a 
                href="tel:+79089788919" 
                className="text-gold-500 font-display text-lg sm:text-xl uppercase tracking-widest border border-gold-500/30 px-8 sm:px-12 py-4 sm:py-6 w-full text-center hover:bg-gold-500 hover:text-white transition-all duration-500"
              >
                +7 (908) 978-89-19
              </a>
              <p className="text-slate-600 text-[8px] uppercase tracking-[0.4em] text-center leading-loose">
                Владивосток, ул. Русская, 65/4 <br /> Бизнес-центр "Точка отсчета"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
