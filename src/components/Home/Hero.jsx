import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default function Hero({ cursos = [] }) {
  const upcomingCourses = cursos
    .filter((curso) => curso.orden)
    .sort((a, b) => Number(a.orden) - Number(b.orden));


  const responsiveOptions = [
    { breakpoint: "1024px", numVisible: 3, numScroll: 1 },
    { breakpoint: "768px", numVisible: 2, numScroll: 1 },
    { breakpoint: "640px", numVisible: 1, numScroll: 1 },
  ];

  const renderCourse = (curso) => (
    <div className="group relative rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-2 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
      <div className="overflow-hidden rounded-xl">
        <img
          src={curso.imagen}
          alt={curso.titulo}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );

  return (
    <section className="relative overflow-hidden px-4 py-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-center lg:max-w-2xl">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Cursos 2026
          </div>

          <h1 className="text-2xl font-black leading-tight md:text-5xl font-semibold">
            Próximos cursos
          </h1>
        </div>

        {/* Carousel Section */}
        <div className="mt-6 w-full">
          <div className="mb-2 flex items-center gap-4">
            <span className="whitespace-nowrap text-xs tracking-widest text-white text-yellow-300 font-semibold">
              Inician en pocos días
            </span>
            <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent" />
          </div>

          <Carousel
            value={upcomingCourses}
            itemTemplate={renderCourse}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            circular
            autoplayInterval={2500}
            showIndicators
            showNavigators
            className="sm:px-2"
          />
        </div>
      </div>
    </section>
  );
}
