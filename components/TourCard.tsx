
import React from 'react';
import { Tour } from '../types';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group relative bg-slate-900/20 border border-white/5 hover:border-gold-500/30 transition-all duration-700 flex flex-col h-full overflow-hidden">
      <div className="aspect-[16/10] relative overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover grayscale opacity-50 transition-all duration-1000 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent"></div>
        <div className="absolute top-8 left-8">
          <span className="px-4 py-1.5 bg-gold-600 text-white text-[10px] font-display font-bold uppercase tracking-[0.2em] shadow-xl">
            {tour.subtitle}
          </span>
        </div>
      </div>

      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-3xl font-display font-bold text-white mb-6 uppercase tracking-tighter group-hover:text-gold-500 transition-colors duration-500">
          {tour.title}
        </h3>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed font-light italic border-l border-gold-500/20 pl-6 group-hover:border-gold-500 transition-colors">
          {tour.description}
        </p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-3 mb-10">
          {tour.features.map(f => (
            <span key={f} className="text-[9px] text-slate-500 border border-white/5 px-4 py-1.5 uppercase tracking-widest bg-white/5 group-hover:bg-white/10 transition-colors">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-10 border-t border-white/5 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[9px] text-slate-600 uppercase tracking-[0.3em] mb-1">Тариф</span>
            <span className="text-white font-display text-sm font-bold tracking-widest">{tour.price}</span>
          </div>
          <a 
            href="#contact" 
            className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gold-500 hover:bg-gold-600 hover:text-white hover:border-gold-600 transition-all duration-500 group/btn"
          >
            <svg className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
