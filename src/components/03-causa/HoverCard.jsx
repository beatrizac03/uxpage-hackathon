import React from 'react';

export default function HoverCard({ data, className = '' }) {
  if (!data) return null;

  const { name, username, image, bio, stats, socialLinks } = data;

  return (
    <div className={`group [perspective:1000px] w-full max-w-sm h-96 ${className}`}>
      {/* Card Container com rotação 3D no hover */}
      <div class="relative w-full h-full rounded-2xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border border-slate-800 bg-slate-900">
        
        {/* ================= FRENTE DO CARD ================= */}
        <div class="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col items-center justify-center [backface-visibility:hidden] bg-slate-900/90 text-white">
          <img
            src={image}
            alt={name}
            class="w-24 h-24 rounded-full object-cover border-2 border-blue-500 shadow-md mb-4"
          />
          <h3 class="text-xl font-bold font-display text-white">{name}</h3>
          <p class="text-sm text-blue-400 font-medium">@{username}</p>
          
          <p class="text-xs text-slate-400 mt-6 text-center italic">
            Passe o mouse para ver os detalhes →
          </p>
        </div>

        {/* ================= VERSO DO CARD ================= */}
        <div class="absolute inset-0 w-full h-full rounded-2xl p-6 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)] bg-slate-800 text-white">

          <div>
            <div class="flex items-center gap-3 mb-3">
              <img
                src={image}
                alt={name}
                class="w-10 h-10 rounded-full object-cover border border-blue-400"
              />
              <div>
                <h4 class="text-base font-bold leading-tight">{name}</h4>
                <span class="text-xs text-slate-400">@{username}</span>
              </div>
            </div>

            <p class="text-sm text-slate-300 line-clamp-4 leading-relaxed">
              {bio}
            </p>
          </div>

          {stats && (
            <div class="grid grid-cols-3 gap-2 py-3 border-y border-slate-700/60 text-center my-2">
              <div>
                <span class="block text-base font-bold text-blue-400">{stats.followers}</span>
                <span class="text-[10px] uppercase tracking-wider text-slate-400">Seguidores</span>
              </div>
              <div>
                <span class="block text-base font-bold text-blue-400">{stats.following}</span>
                <span class="text-[10px] uppercase tracking-wider text-slate-400">Seguindo</span>
              </div>
              {stats.posts !== undefined && (
                <div>
                  <span class="block text-base font-bold text-blue-400">{stats.posts}</span>
                  <span class="text-[10px] uppercase tracking-wider text-slate-400">Posts</span>
                </div>
              )}
            </div>
          )}

          {socialLinks && (
            <div class="flex justify-center gap-4 pt-1">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              )}
              {socialLinks.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}