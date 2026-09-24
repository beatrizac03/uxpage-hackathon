// src/components/sections/ApoioCarousel.jsx
import React, { useState } from 'react';
import HoverCard from './HoverCard.jsx';

export default function ApoioCarousel({ apoiadoresData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Versão Desktop: Grid 2x2 mantida */}
      <div className="hidden md:grid grid-cols-2 gap-6 justify-items-center">
        {apoiadoresData.map((item, index) => (
          <HoverCard 
            key={index}
            client:visible 
            data={item} 
            className="w-full max-w-xs h-72" 
          />
        ))}
      </div>

      {/* Versão Mobile: Carrossel Horizontal com Snap e Indicadores */}
      <div className="md:hidden w-full">
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 pb-6 px-4 -mx-4"
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const cardWidth = e.currentTarget.offsetWidth * 0.8; // estimativa de largura do card
            const index = Math.round(scrollLeft / cardWidth);
            setActiveIndex(index);
          }}
        >
          {apoiadoresData.map((item, index) => (
            <div 
              key={index} 
              className="snap-center shrink-0 w-[85%] max-w-[300px] first:pl-2 last:pr-2"
            >
              <HoverCard 
                client:visible 
                data={item} 
                className="w-full h-72" 
              />
            </div>
          ))}
        </div>

        {/* Indicadores de Página (Dots) */}
        <div className="flex justify-center items-center gap-2 mt-2">
          {apoiadoresData.map((_, index) => (
            <span
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-6 bg-amber-400' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}