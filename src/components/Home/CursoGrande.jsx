import { Clock, Calendar, ArrowRight } from 'lucide-react';

export default function CursoGrande({ curso }) {
  const accentColor = curso.colorPrimario || '#3b82f6';

  return (
    <div className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_-12px_rgba(59,130,246,0.25)] hover:border-slate-700
                    w-full max-w-md md:max-w-lg">

      {/* Imagen */}
      <div className="relative w-full h-80 md:h-110">
        <img
          src={curso.imagen}
          alt={curso.titulo}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badge precio */}
        <div className="absolute top-2 right-2 bg-slate-950/80 backdrop-blur-md px-2 py-1 rounded-md border border-white/10">
          <span className="text-white font-bold text-xs md:text-sm">
            ${curso.precio}{' '}
            <span className="text-[10px] md:text-xs text-slate-400 font-normal">
              {curso.moneda}
            </span>
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-3 sm:p-4 flex flex-col flex-1 bg-gradient-to-b from-slate-900 to-[#0b1222]">
        <div className="mb-2 sm:mb-3">
          <h3 className="text-sm sm:text-lg font-semibold text-slate-50 leading-snug mb-1.5">
            {curso.titulo}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {curso.descripcion}
          </p>
        </div>

        {/* Detalles */}
        <div className="flex flex-wrap gap-2 mb-3 text-xs sm:text-sm">
          <div className="flex items-center gap-1.5 font-medium text-slate-300 bg-slate-800/50 px-2 py-1 rounded-md">
            <Clock size={12} style={{ color: accentColor }} />
            {curso.duracion}
          </div>

          {curso.inicio && (
            <div className="flex items-center gap-1.5 font-medium text-slate-300 bg-slate-800/50 px-2 py-1 rounded-md">
              <Calendar size={12} style={{ color: accentColor }} />
              <span>{curso.inicio}</span>
            </div>
          )}
        </div>

        {/* Botón */}
        <button
          className="mt-auto w-full flex items-center justify-center gap-2 py-2 px-3 sm:py-2.5 sm:px-4 rounded-lg text-white text-sm sm:text-base font-semibold transition-all active:scale-95 group/btn overflow-hidden relative"
          style={{ backgroundColor: accentColor }}
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          <span className="relative z-10">Inscribirme</span>
          <ArrowRight
            size={16}
            className="relative z-10 group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>

      {/* Borde inferior color primario */}
      <div
        className="h-0.5 w-full"
        style={{ backgroundColor: accentColor }}
      />
    </div>
  );
}
