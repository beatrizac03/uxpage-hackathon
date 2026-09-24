// src/components/sections/TrilhaCarreira.jsx
import { motion } from 'framer-motion';

export default function TrilhaCarreira() {
  const pontos = [
    {
      id: 'junior',
      nivel: 'Júnior',
      descricao: 'Comece na prática.',
      cor: 'bg-cyan-500 border-white shadow-[0_0_20px_rgba(6,182,212,0.6)]',
      corPulso: 'bg-cyan-400',
      posicaoText: 'top-full mt-4 left-1/2 -translate-x-1/2 text-center',
      x: 100,
      y: 220,
    },
    {
      id: 'pleno',
      nivel: 'Pleno',
      descricao: 'Ganhe experiência.',
      cor: 'bg-emerald-500 border-white shadow-[0_0_20px_rgba(16,185,129,0.6)]',
      corPulso: 'bg-emerald-400',
      posicaoText: 'top-full mt-4 left-1/2 -translate-x-1/2 text-center',
      x: 350,
      y: 150,
    },
    {
      id: 'senior',
      nivel: 'Sênior',
      descricao: 'Lidere e transforme.',
      cor: 'bg-amber-500 border-white shadow-[0_0_25px_rgba(245,158,11,0.7)]',
      corPulso: 'bg-amber-400',
      posicaoText: 'top-full mt-4 left-1/2 -translate-x-1/2 text-center',
      x: 600,
      y: 50,
      isAlvo: true,
    },
  ];

  return (
    <div className="relative w-full max-w-[700px] h-[320px] flex items-center justify-center mx-auto pt-6">
      {/* SVG com a linha curva pontilhada em formato 'S' visível no fundo claro */}
      <svg
        viewBox="0 0 700 280"
        className="absolute inset-0 w-full h-full overflow-visible"
        fill="none"
      >
        <path
          d="M 100 220 C 220 220, 230 150, 350 150 C 470 150, 480 50, 600 50"
          stroke="rgba(30, 58, 138, 0.35)"
          strokeWidth="3.5"
          strokeDasharray="8 8"
        />
      </svg>

      {/* Renderização dos 3 pontos e textos */}
      <div className="relative w-full h-full">
        {pontos.map((ponto, index) => (
          <div
            key={ponto.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${(ponto.x / 700) * 100}%`,
              top: `${(ponto.y / 280) * 100}%`,
            }}
          >
            {/* Círculo com efeito de pulso suave */}
            <div className="relative flex items-center justify-center">
              
              {/* Bandeira fincada perfeitamente no topo do Sênior */}
              {ponto.isAlvo && (
                <div className="absolute -top-7 left-3 z-25 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-7 h-7 text-amber-500 origin-bottom"
                  >
                    <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054a8.25 8.25 0 0 0 5.584.652l4.01-1.145a.75.75 0 0 1 .933.728v12.49a.75.75 0 0 1-.54.72l-4.16 1.188a8.25 8.25 0 0 1-5.584-.652l-.108-.054a9.75 9.75 0 0 0-6.725-.738L3.75 16.5v4.5a.75.75 0 0 1-1.5 0v-18A.75.75 0 0 1 3 2.25Z" clipRule="evenodd" />
                  </svg>
                </div>
              )}

              {/* Pulso suave adaptado para fundo claro */}
              <motion.span
                animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.8,
                  ease: 'easeInOut',
                }}
                className={`absolute w-8 h-8 rounded-full ${ponto.corPulso} filter blur-[1px]`}
              />

              {/* Bolinha principal */}
              <span
                className={`relative w-8 h-8 rounded-full border-2 shadow-lg cursor-pointer transition-transform hover:scale-125 z-20 ${ponto.cor}`}
              />
            </div>

            {/* Texto informativo com cores escuras para fundo claro */}
            <div className={`absolute whitespace-nowrap font-sans ${ponto.posicaoText}`}>
              <h4 className="font-display font-bold text-base text-blue-950 tracking-wide">
                {ponto.nivel}
              </h4>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                {ponto.descricao}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}