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
        <div className="space-y-4 md:p-16">

            <div className="flex items-center gap-4 mb-6">
                <span className="text-xs font-black uppercase tracking-widest text-white whitespace-nowrap">
                    {grupo}
                </span>
                <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <CursoGrande curso={cursoPrincipal} />
                </div>

                <div className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-x-visible py-2">
                    {otrosCursos.map((curso) => (
                        <div key={curso.id} className="flex-shrink-0 md:flex-shrink-1 w-40 md:w-full">
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
