import { motion } from 'framer-motion';

export default function TrilhaCarreira() {
  const pontos = [
    {
      id: 'junior',
      nivel: 'Júnior',
      descricao: 'Comece na prática.',
      cor: 'bg-blue-600 border-blue-400 shadow-blue-500/50',
      corPulso: 'bg-blue-500',
      posicaoText: 'bottom-full mb-3 left-0',
      x: 100,
      y: 220,
    },
    {
      id: 'pleno',
      nivel: 'Pleno',
      descricao: 'Ganhe experiência.',
      cor: 'bg-emerald-600 border-emerald-400 shadow-emerald-500/50',
      corPulso: 'bg-emerald-500',
      posicaoText: 'top-full mt-3 left-1/2 -translate-x-1/2',
      x: 350,
      y: 150,
    },
    {
      id: 'senior',
      nivel: 'Sênior',
      descricao: 'Lidere e transforme.',
      cor: 'bg-orange-500 border-orange-300 shadow-orange-500/50',
      corPulso: 'bg-orange-400',
      posicaoText: 'bottom-full mb-3 right-0 text-right',
      x: 600,
      y: 50,
    },
  ];

  return (
    <div className="relative w-full max-w-[700px] h-[280px] flex items-center justify-center mx-auto">
      {/* SVG com a linha curva pontilhada em formato 'S' */}
      <svg
        viewBox="0 0 700 280"
        className="absolute inset-0 w-full h-full overflow-visible"
        fill="none"
      >
        <path
          d="M 100 220 C 220 220, 230 150, 350 150 C 470 150, 480 50, 600 50"
          stroke="rgba(255, 255, 255, 0.4)"
          strokeWidth="2.5"
          strokeDasharray="6 6"
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
            {/* Texto informativo */}
            <div className={`absolute whitespace-nowrap text-white font-sans ${ponto.posicaoText}`}>
              <span className="font-bold text-sm sm:text-base">{ponto.nivel}: </span>
              <span className="text-xs sm:text-sm text-slate-200">{ponto.descricao}</span>
            </div>

            {/* Círculo com efeito de pulso/glow continuo */}
            <div className="relative flex items-center justify-center">
              {/* Animação de expansão contínua */}
              <motion.span
                animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.6,
                  ease: 'easeInOut',
                }}
                className={`absolute w-8 h-8 rounded-full ${ponto.corPulso}`}
              />

              {/* Bolinha principal com gradiente e sombra 3D */}
              <span
                className={`relative w-8 h-8 rounded-full border-2 shadow-lg cursor-pointer transition-transform hover:scale-125 ${ponto.cor}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}