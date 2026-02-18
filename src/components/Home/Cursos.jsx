import GrupoCursos from "./GrupoCursos";
import logoBlumbit from '/logoBlumbit.png';

export default function Cursos({ cursos, numero }) {
  const cursosPorGrupo = cursos.reduce((acc, curso) => {
    const grupo = curso.grupo || 'otros';
    if (!acc[grupo]) acc[grupo] = [];
    acc[grupo].push(curso);
    return acc;
  }, {});

  return (
    <section className="relative text-slate-100 py-0 px-4 sm:px-6 overflow-hidden px-4 py-6">

      {/* Fondos decorativos */}


      <div className="relative max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col justify-center lg:max-w-2xl">
          <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-500" />
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            Cursos 2026
          </div>

          <h1 className="text-2xl md:text-5xl font-black leading-tight font-semibold">
            Cursos Disponibles
          </h1>

          <img
            src={logoBlumbit}
            className="md:w-30 w-20 object-contain absolute md:right-50 right-2 top-2 md:top-8"
            alt="Logo"
          />
        </div>

        {Object.entries(cursosPorGrupo).map(([grupo, cursosGrupo]) => (
          <GrupoCursos
            key={grupo}
            grupo={grupo}
            cursos={cursosGrupo}
            numero={numero}
          />
        ))}
      </div>
    </section>
  );
}
