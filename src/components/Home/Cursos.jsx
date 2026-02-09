import { Clock, Calendar, ArrowRight } from 'lucide-react';

export default function Cursos({ cursos }) {
  return (
    <section className="relative bg-[#020617] text-slate-100 py-20 px-6 overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* --- CAPA DE FONDO (Mejorada) --- */}
      {/* 1. Malla de puntos sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      {/* 2. Luces de ambiente (Blobs) */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[30%] bg-slate-800/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16 text-center sm:text-left">
          {/* <h2 className="text-indigo-400 font-mono text-xs mb-3 tracking-[0.3em] uppercase font-bold">Tech Training</h2> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Cursos Disponibles
          </h1>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cursos.map((curso, index) => {
            // Detectar si la card es pequeña (según nth-child de tu grid)
            const esPequena = index % 3 === 1 || index % 3 === 2;

            return (
              <div
                key={curso.id}
                className={`
          group relative bg-slate-900/40 backdrop-blur-md border border-slate-800
          rounded-2xl overflow-hidden hover:bg-slate-900/60 transition-all duration-300
          shadow-2xl flex flex-col

          col-span-2
          [&:nth-child(3n+2)]:col-span-1
          [&:nth-child(3n+3)]:col-span-1
          sm:col-span-1
        `}
              >
                {/* Imagen */}
                <div className="relative w-full overflow-hidden
                        h-auto max-h-96 sm:h-72 lg:h-80">
                  <img
                    src={curso.imagen}
                    alt={curso.titulo}
                    className={`w-full h-full transition-all duration-500
                        ${esPequena ? "object-contain" : "object-cover"} 
                        group-hover:grayscale-0 group-hover:scale-105 grayscale-[20%] sm:object-cover`}
                  />
                </div>

                {/* Contenido solo si no es pequeña en móviles */}
                {(!esPequena || window.innerWidth >= 640) && (
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="md:text-1xl font-bold mb-2 leading-tight transition-colors group-hover:text-[color-var(--color-curso)]">
                        {curso.titulo}
                      </h3>

                      <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed font-light">
                        {curso.descripcion}
                      </p>

                      <div className="flex sm:flex-row sm:gap-4 gap-3 mb-4">
                        <div className="flex items-center gap-1 text-slate-300 text-sm">
                          <Clock size={16} style={{ color: curso.colorPrimario }} />
                          <span>{curso.duracion}</span>
                        </div>
                        <div className="flex items-center gap-1 text-slate-300 text-sm">
                          <Calendar size={16} style={{ color: curso.colorPrimario }} />
                          <span>Inicia: {curso.inicio}</span>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-slate-800/50 pt-4">
                      <div>
                        <span className="text-2xl font-black text-white tracking-tighter">
                          ${curso.precio}
                        </span>
                        <span className="text-[10px] uppercase font-bold text-slate-500 ml-1">
                          {curso.moneda}
                        </span>
                      </div>

                      <button
                        className="flex items-center gap-2 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all hover:brightness-110 active:scale-95 shadow-lg"
                        style={{ backgroundColor: curso.colorPrimario }}
                      >
                        Inscribirme
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Borde inferior de color solo en grandes */}
                {(!esPequena || window.innerWidth >= 640) && (
                  <div
                    className="h-1 w-full"
                    style={{ backgroundColor: curso.colorPrimario }}
                  />
                )}
              </div>
            );
          })}
        </div>


        <div className="mb-16 text-center sm:text-left">
          {/* <h2 className="text-indigo-400 font-mono text-xs mb-3 tracking-[0.3em] uppercase font-bold">Tech Training</h2> */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Cursos Disponibles
          </h1>
        </div>
      </div>
    </section>
  );
}