import GrupoCursos from "./GrupoCursos";

export default function Cursos({ cursos }) {
  const cursosPorGrupo = cursos.reduce((acc, curso) => {
    const grupo = curso.grupo || 'otros';
    if (!acc[grupo]) acc[grupo] = [];
    acc[grupo].push(curso);
    return acc;
  }, {});

  return (
    <section className="relative text-slate-100 py-0 px-4 sm:px-6 overflow-hidden">

      {/* Fondos decorativos */}


      <div className="relative max-w-7xl mx-auto">
        <h1 className="text-2xl font-black leading-tight md:text-5xl font-semibold">
          Cursos Disponibles
        </h1>

        {Object.entries(cursosPorGrupo).map(([grupo, cursosGrupo]) => (
          <GrupoCursos
            key={grupo}
            grupo={grupo}
            cursos={cursosGrupo}
          />
        ))}
      </div>
    </section>
  );
}
