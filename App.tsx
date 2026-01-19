
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourCard from './components/TourCard';
import Chatbot from './components/Chatbot';
import { LEGAL_SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#020617] text-slate-200 selection:bg-gold-500 selection:text-black">
      <Navbar />
      
      <main>
        <Hero />

        {/* Bento Grid Experience */}
        <section id="about" className="py-20 md:py-40 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 glass p-8 sm:p-16 md:p-24 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12">
                   <svg className="w-80 h-80 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.45L19.22 19H4.78L12 5.45zM11 10v4h2v-4h-2zm0 6v2h2v-2h-2z" /></svg>
                </div>
                <span className="text-gold-500 font-display text-[10px] tracking-[0.5em] uppercase mb-10 block">Наши принципы</span>
                <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black mb-12 text-white leading-[1.2] md:leading-[0.9] tracking-tighter uppercase break-words">
                  <span className="whitespace-nowrap">ЗАЩИТА С</span> <br className="hidden sm:block"/><span className="golden-text whitespace-nowrap">ХАРАКТЕРОМ</span>
                </h2>
                <p className="max-w-3xl text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-16">
                  Юриспруденция — это не только знание законов, но и стратегия. 25 лет мы доказываем: безвыходных ситуаций нет, есть только неверно выбранная тактика. Мы находим решения там, где другие сдаются.
                </p>
                <div className="flex flex-wrap gap-8 md:gap-16">
                  <div>
                    <span className="block text-4xl md:text-5xl font-display font-bold text-white mb-3 tracking-tighter">25+</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Лет практики</span>
                  </div>
                  <div>
                    <span className="block text-4xl md:text-5xl font-display font-bold text-white mb-3 tracking-tighter">5к+</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Клиентов</span>
                  </div>
                  <div>
                    <span className="block text-4xl md:text-5xl font-display font-bold text-white mb-3 tracking-tighter">92%</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600">Выигрыш дел</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gold-600 p-8 sm:p-16 flex flex-col justify-between group cursor-default">
                <div className="space-y-10">
                   <div className="w-16 h-16 border border-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                   </div>
                   <h3 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase tracking-tighter leading-none">Комплексная броня</h3>
                </div>
                <div className="mt-12 lg:mt-0">
                   <p className="text-white/80 text-lg leading-relaxed mb-10">Мы берем на себя все риски и бюрократию, позволяя вам сосредоточиться на главном.</p>
                   <a href="#contact" className="text-white text-[10px] uppercase tracking-[0.4em] font-bold border-b-2 border-white/30 pb-3 inline-block hover:border-white transition-all">Начать защиту</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20 md:py-40 bg-slate-950/40">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:32 gap-12">
              <div className="max-w-4xl">
                <span className="text-gold-500 font-display text-[10px] tracking-[0.5em] uppercase mb-6 block">Экспертиза</span>
                <h2 className="text-5xl md:text-9xl font-display font-black text-white uppercase leading-[1.1] md:leading-[0.8] tracking-tighter">ЛИНИЯ <br /><span className="text-outline">ОБОРОНЫ</span></h2>
              </div>
              <p className="max-w-xs text-xs text-slate-500 uppercase leading-loose tracking-[0.2em] mb-4">
                Узкая специализация в морском, таможенном и автоправе гарантирует глубину погружения в каждый кейс.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
              {LEGAL_SERVICES.map(service => (
                <TourCard key={service.id} tour={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section id="contact" className="py-24 md:py-48 relative bg-slate-950 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
             <span className="text-[25vw] font-display font-black whitespace-nowrap uppercase">ИСЛАНД ВОСТОК</span>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl sm:text-6xl md:text-[11rem] font-display font-black text-white mb-20 leading-tight md:leading-none tracking-tighter uppercase">
              ВАШЕ ДЕЛО — <br /><span className="golden-text italic">НАША СТРАТЕГИЯ</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-16">
               <div className="flex flex-col items-center">
                  <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] mb-8">Прямая линия</p>
                  <a href="tel:+79089788919" className="text-2xl sm:text-4xl md:text-7xl font-display font-bold text-white hover:text-gold-500 transition-all tracking-tighter underline underline-offset-[16px] decoration-gold-500/20">
                    +7 (908) 978-89-19
                  </a>
               </div>
               <div className="hidden lg:block w-px h-32 bg-white/10"></div>
               <div className="flex flex-col items-center">
                  <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] mb-8">Мгновенный ответ</p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=79089788919"
                    target="_blank"
                    className="px-10 md:px-16 py-6 md:py-8 bg-green-600 text-white font-display font-bold uppercase tracking-[0.2em] text-[11px] hover:bg-green-500 transition-all shadow-2xl shadow-green-600/20"
                  >
                    WhatsApp Консультация
                  </a>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#01040f] py-20 md:py-40 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 mb-32">
            <div className="lg:col-span-6">
              <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter text-white block mb-12 uppercase">ИСЛАНД <span className="text-gold-500 italic font-serif">ВОСТОК</span></span>
              <p className="text-slate-500 font-light text-xl leading-relaxed max-w-xl mb-12">
                Мы создаем новые стандарты юридической помощи, объединяя фундаментальный опыт и смелые правовые решения в интересах наших доверителей.
              </p>
              <div className="text-[11px] text-slate-700 uppercase tracking-widest font-mono">
                ИНН 253903502188 | РЕЕСТР ЮРИДИЧЕСКИХ ЛИЦ РФ
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h5 className="text-gold-500 font-display font-bold mb-12 text-[10px] uppercase tracking-[0.5em]">Карта сайта</h5>
              <ul className="space-y-6 md:space-y-8">
                {['О нас', 'Услуги', 'Оплата', 'Контакты'].map(item => (
                  <li key={item}>
                    <a href={`#${item === 'О нас' ? 'about' : item.toLowerCase()}`} className="text-slate-400 text-xs uppercase tracking-[0.3em] hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h5 className="text-gold-500 font-display font-bold mb-12 text-[10px] uppercase tracking-[0.5em]">Офис во Владивостоке</h5>
              <p className="text-slate-400 text-sm font-light leading-loose uppercase tracking-widest mb-10">
                ул. Русская, 65/4, офис 48 <br />
                Бизнес-центр "Точка отсчета"
              </p>
              <div className="flex border-b border-white/10 pb-6 group">
                 <input type="email" placeholder="ПОДПИСКА НА ПРАКТИКУ" className="bg-transparent text-[10px] text-white focus:outline-none flex-grow tracking-[0.3em] uppercase placeholder:text-slate-800" />
                 <button className="text-gold-500 uppercase text-[10px] font-bold tracking-[0.2em] group-hover:translate-x-2 transition-transform">ОТПРАВИТЬ</button>
              </div>
            </div>
          </div>
          
          <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
            <p className="text-slate-800 text-[10px] font-display uppercase tracking-[0.6em] text-center md:text-left">© 2025 ЮРИДИЧЕСКАЯ КОМПАНИЯ ИСЛАНД ВОСТОК. С 2000 ГОДА.</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-[10px] text-slate-800 uppercase tracking-widest">
               <a href="#" className="hover:text-slate-500 transition-colors">Политика конфиденциальности</a>
               <a href="#" className="hover:text-slate-500 transition-colors">Условия обслуживания</a>
            </div>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
