import { Calendar, ArrowRight } from "lucide-react";

export default function Hero({ cursos }) {
  const cursosProximos = cursos.filter((curso) => curso.inicio !== "Inmediato");

  return (
    <section className="relative bg-[#020617] text-slate-100 py-20 px-6 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Texto principal */}
        <div className="flex-1 flex flex-col justify-center mb-12 lg:mb-0 lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Cupos limitados 2026
          </div>

          <h1 className="text-[10vw] md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 tracking-tight">
            PROXIMOS 
            <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              CURSOS
            </span>
          </h1>
        </div>

        {/* Cursos próximos en grid */}
        <div className="w-full mt-12">
          {/* Título */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">
              Inician en pocos días
            </span>
            <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosProximos.map((curso) => (
              <div
                key={curso.id}
                className="relative bg-slate-900/70 backdrop-blur-sm rounded-3xl p-4 border border-slate-800 shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Glow de fondo */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-20 blur-xl"
                  style={{ backgroundColor: curso.colorPrimario }}
                />

                {/* Imagen */}
                <div className="relative h-36 w-full mb-4 rounded-2xl overflow-hidden border border-slate-700">
                  <img
                    src={curso.imagen}
                    alt={curso.titulo}
                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2 relative z-10">
                  <h4
                    className="text-sm sm:text-base font-bold text-white truncate"
                    style={{ color: curso.colorPrimario }}
                  >
                    {curso.titulo}
                  </h4>

                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} strokeWidth={2} style={{ color: curso.colorPrimario }} />
                      {curso.inicio}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span className="flex items-center gap-1 uppercase tracking-tighter">
                      {curso.duracion}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-extrabold text-white">
                      ${curso.precio}
                    </span>

                    <button
                      className="flex items-center gap-1 px-3 py-2 bg-[rgba(255,255,255,0.05)] rounded-lg text-white text-xs font-bold shadow-sm hover:bg-[rgba(255,255,255,0.1)] transition-transform transform hover:scale-105"
                    >
                      Unirme <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
