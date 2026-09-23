import {
  Bug,
  BarChart3,
  PenTool,
  Briefcase,
  UserCheck,
  Package,
  Cpu,
  Megaphone,
  Code2,
  Smartphone,
  Layers,
} from 'lucide-react';

const areas = [
  { id: 'qa', nome: 'QA & Testes', icone: Bug },
  { id: 'data', nome: 'Data & Analytics', icone: BarChart3 },
  { id: 'ux', nome: 'UX/UI Design', icone: PenTool },
  { id: 'business', nome: 'Business', icone: Briefcase },
  { id: 'recruit', nome: 'Tech Recruit', icone: UserCheck },
  { id: 'produto', nome: 'Produto', icone: Package },
  { id: 'devops', nome: 'DevOps & Cloud', icone: Cpu },
  { id: 'marketing', nome: 'Marketing Tech', icone: Megaphone },
  { id: 'web', nome: 'Dev Web', icone: Code2 },
  { id: 'mobile', nome: 'Dev Mobile', icone: Smartphone },
  { id: 'agil', nome: 'Agilidade', icone: Layers },
];

export default function AtuacaoMarquee() {
  // Duplicamos a lista para criar a ilusão de loop infinito perfeito sem saltos
  const doubleAreas = [...areas, ...areas];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      {/* Contêiner da Animação do Marquee */}
      <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
        {doubleAreas.map((area, index) => {
          const Icone = area.icone;
          return (
            <div
              key={`${area.id}-${index}`}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-400/50 hover:bg-blue-600/20 transition-all duration-300 shrink-0 cursor-pointer group"
            >
              <div className="p-2.5 rounded-xl bg-white/5 text-sky-400 group-hover:bg-sky-400 group-hover:text-slate-950 transition-colors duration-300">
                <Icone className="w-5 h-5" />
              </div>
              <span className="font-medium text-sm text-slate-200 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {area.nome}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}