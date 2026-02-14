import { useEffect, useState } from 'react';
import CursoGrande from './CursoGrande';
import CursoPequeno from './CursoPequeno';


export default function GrupoCursos({ grupo, cursos }) {
    const [activo, setActivo] = useState(0);

    useEffect(() => {
        if (cursos.length <= 1) return;

        const interval = setInterval(() => {
            setActivo((prev) => (prev + 1) % cursos.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [cursos.length]);

    const cursoPrincipal = cursos[activo];
    const otrosCursos = cursos.filter((_, i) => i !== activo);

    return (
        <div className="space-y-4 md:py-16 py-6">

            <div className="mb-2 flex items-center gap-4">
                <span className="whitespace-nowrap text-xs tracking-widest text-white py-2 text-yellow-300 font-semibold">
                    {grupo}
                </span>
                <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="">
                    <CursoGrande curso={cursoPrincipal} />
                </div>
                <div className="flex md:grid md:grid-cols-2 gap-2 overflow-x-auto py-2">
                    {otrosCursos.map((curso) => (
                        <div key={curso.id} className="w-40 md:w-full">
                            <CursoPequeno
                                curso={curso}
                                onClick={() => setActivo(cursos.indexOf(curso))}
                            />
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
}
