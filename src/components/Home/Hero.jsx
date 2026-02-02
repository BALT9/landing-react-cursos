import { Calendar, ArrowRight } from "lucide-react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Hero({ cursos }) {
  const cursosProximos = cursos.filter((curso) => curso.inicio !== "Inmediato");

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const cursoTemplate = (curso) => (
    <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-1 sm:p-2 md:p-3 border border-slate-800 shadow-md hover:shadow-xl transition-shadow duration-500">
      {/* Imagen */}
      <div className="relative h-full w-full rounded-xl overflow-hidden">
        <img
          src={curso.imagen}
          alt={curso.titulo}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <section className="relative bg-[#020617] text-slate-100 py-20 px-4 sm:px-6 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-600/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Texto principal */}
        <div className="flex flex-col justify-center mb-12 lg:mb-0 lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Cupos limitados 2026
          </div>

          <h1 className="text-[10vw] md:text-6xl lg:text-7xl font-black leading-[0.9] mb-6 tracking-tight">
            PROXIMOS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
              CURSOS
            </span>
          </h1>
        </div>

        {/* Carrusel de cursos */}
        <div className="w-full mt-12">
          {/* Título */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500 whitespace-nowrap">
              Inician en pocos días
            </span>
            <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <Carousel
            value={cursosProximos}
            itemTemplate={cursoTemplate}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            circular
            autoplayInterval={2500}
            className="px-0 sm:px-2"
            showIndicators
            showNavigators
          />

        </div>
      </div>

      {/* Estilos para ocultar flechas en móviles y agregar espaciado en md */}
      <style jsx>{`
        @media (max-width: 767px) {
          .p-carousel-prev, .p-carousel-next {
            display: none !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1024px) {
          .p-carousel .p-carousel-item {
            padding: 0 0.5rem; /* Espaciado entre cards en md */
          }
        }
      `}</style>
    </section>
  );
}
