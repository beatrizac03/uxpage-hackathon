import { useState } from 'react';
import { motion } from 'framer-motion';

const projetos = [
  {
    id: 1,
    titulo: 'Neon Warden',
    autor: 'Mason Drake',
    imagem: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop',
    tags: ['Astro', 'React', 'Tailwind'],
  },
  {
    id: 2,
    titulo: 'Quantum Specter',
    autor: 'Ethan Vance',
    imagem: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop',
    tags: ['Node.js', 'TypeScript'],
  },
  {
    id: 3,
    titulo: 'Cyber Phantom',
    autor: 'Nova Sterling',
    imagem: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=600&auto=format&fit=crop',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    id: 4,
    titulo: 'Void Sentinel',
    autor: 'Kaelen Voss',
    imagem: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop',
    tags: ['Python', 'FastAPI'],
  },
  {
    id: 5,
    titulo: 'Infinity Cutter',
    autor: 'Lyra Mercer',
    imagem: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop',
    tags: ['UI/UX', 'Figma'],
  },
];

export default function CardsCarrossel() {
  const [active, setActive] = useState(0);

  // Calcula transformações 3D dinâmicas conforme a distância do card ativo
  const getCardStyle = (index) => {
    const total = projetos.length;
    let offset = index - active;

    // Garante que a transição seja em ciclo contínuo
    if (offset > Math.floor(total / 2)) offset -= total;
    if (offset < -Math.floor(total / 2)) offset += total;

    const absOffset = Math.abs(offset);

    return {
      x: offset * 140, // Espaçamento horizontal entre cards
      scale: 1 - absOffset * 0.15, // Reduz tamanho dos cards laterais
      rotateY: offset * -25, // Rotação 3D em leque igual ao CodePen
      zIndex: 10 - absOffset, // Card central fica por cima
      opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.2, // Oculta cards muito distantes
    };
  };

  return (
    <div className="relative w-full py-12 flex flex-col items-center justify-center select-none overflow-hidden">
      {/* Contêiner com Perspetiva 3D */}
      <div className="relative w-full max-w-4xl h-[380px] sm:h-[420px] flex items-center justify-center [perspective:1000px]">
        {projetos.map((projeto, index) => {
          const style = getCardStyle(index);
          const isActive = index === active;

          return (
            <motion.div
              key={projeto.id}
              onClick={() => setActive(index)}
              animate={style}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className={`absolute w-64 sm:w-72 h-80 sm:h-96 rounded-3xl p-4 cursor-pointer bg-slate-800/90 border border-white/15 backdrop-blur-md shadow-2xl flex flex-col justify-between transition-shadow duration-300 ${
                isActive ? 'shadow-sky-500/20 border-sky-400/50' : 'hover:border-white/30'
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Header do Card */}
              <div className="flex items-center justify-between z-10">
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{projeto.titulo}</h3>
                  <p className="text-slate-400 text-xs font-medium">{projeto.autor}</p>
                </div>
                <button
                  aria-label="Guardar projeto"
                  className="w-8 h-8 rounded-full bg-slate-900/60 flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>

              {/* Imagem do Projeto */}
              <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden my-2 border border-white/10">
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Footer com Tags */}
              <div className="flex gap-1.5 flex-wrap z-10">
                {projeto.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white/5 text-slate-300 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Controlo de Navegação em Pontos */}
      <div className="flex gap-2 mt-6 z-20">
        {projetos.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            aria-label={`Ir para projeto ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === active ? 'w-8 bg-amber-400' : 'w-2.5 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}