import { Calendar, ArrowRight } from "lucide-react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Hero({ cursos }) {
  const cursosProximos = cursos.filter((curso) => curso.inicio !== "");

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
    <section className="relative  py-1 px-4 overflow-hidden">
      {/* Fondos decorativos */}

      <div className="relative max-w-7xl mx-auto">

        {/* Texto principal */}
        <div className="flex flex-col justify-center mb-12 lg:mb-0 lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-widest uppercase mb-6 w-fit">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Cursos 2026
          </div>

          <h1 className="text-base md:text-5xl font-black leading-[0.9] mb-6">
            PROXIMOS CURSOS
          </h1>
        </div>

        {/* Carrusel de cursos */}
        <div className="w-full mt-12">
          {/* Título */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">
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
            autoplayInterval={2000}
            className="px-0 sm:px-2"
            showIndicators
            showNavigators
          />

        </div>
      </div>

      {/* Estilos para ocultar flechas en móviles y agregar espaciado en md */}

    </section>
  );
}
