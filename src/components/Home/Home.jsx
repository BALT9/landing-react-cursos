import { Clock, Calendar, ArrowRight } from 'lucide-react';
import Angular from '/postAngular.jpg';
import ChatbotLaravel from '/chatbotLaravel.png';
import ChatbotCloudApi from '/chatbotCloudApi.png';
import ReactImg from '/postReact.png';

const cursos = [
  {
    id: 1,
    titulo: "Desarrollo Web Frontend con Angular",
    descripcion: "Domina el framework de Google. Aprende arquitectura profesional, RxJS y Signals con los estándares de 2026.",
    precio: "99.99",
    moneda: "USD",
    imagen: Angular,
    duracion: "40 horas",
    colorPrimario: "#FF2D95", // Rojo Angular
    inicio: "2 de Enero",
  },
  {
    id: 2,
    titulo: "Curso/Taller de Creación de Chatbots para WhatsApp Cloud Api Conectando con Laravel, Base de Datos e IA ",
    descripcion: "Crea Chatbots, utilizando Laravel, base de datos, inteligencia artificial y despligue en servidores.",
    precio: "29",
    moneda: "USD",
    imagen: ChatbotLaravel,
    duracion: "40h",
    colorPrimario: "#FF2D20", // Rojo Laravel (Cambiado para que resalte)
    inicio: "Inmediato",
  },
  {
    id: 3,
    titulo: "Curso/Taller de Creación de Chatbots para WhatsApp Cloud Api Conectando con Base de Datos e IA ",
    descripcion: "Crea Chatbots, utilizando Laravel, base de datos, inteligencia artificial y despligue en servidores.",
    precio: "29",
    moneda: "USD",
    imagen: ChatbotCloudApi,
    duracion: "40h",
    colorPrimario: "#25D366", // Verde WhatsApp
    inicio: "Inmediato",
  },
  {
    id: 4,
    titulo: "Desarrollo Web Frontend con React/Next",
    descripcion: "Aprende React, el framework para crear aplicaciones Web con interfaces modernas y reactivas.",
    precio: "99.99",
    moneda: "USD",
    imagen: ReactImg,
    duracion: "40 horas",
    colorPrimario: "#61DAFB", // Rojo React
    inicio: "2 de Enero",
  },
];

export default function SeccionCursosDark() {
  return (
    <section className="min-h-screen bg-[#020617] text-slate-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Encabezado */}
        <div className="mb-16 text-center sm:text-left">
          <h2 className="text-indigo-500 font-mono text-sm mb-2 tracking-[0.2em] uppercase">Tech Training</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Cursos Disponibles</h1>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cursos.map((curso) => (
            <div
              key={curso.id}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:bg-slate-900/60 transition-all duration-300 shadow-2xl flex flex-col"
            >
              {/* Imagen */}
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={curso.imagen}
                  alt={curso.titulo}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Contenido */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="md:text-1xl font-bold font-semibold mb-2 leading-tight transition-colors group-hover:text-[color-var(--color-curso)]"
                  >
                    {curso.titulo}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                    {curso.descripcion}
                  </p>

                  <div className="flex sm:flex-row sm:gap-4 gap-3 mb-4">
                    <div className="flex items-center gap-1 text-slate-300 text-sm sm:text-base">
                      <Clock size={16} style={{ color: curso.colorPrimario }} />
                      <span>{curso.duracion}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-300 text-sm sm:text-base">
                      <Calendar size={16} style={{ color: curso.colorPrimario }} />
                      <span>Inicia: {curso.inicio}</span>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-4">
                  <div>
                    <span className="text-2xl font-black text-white">${curso.precio}</span>
                    <span className="text-xs text-slate-500 ml-1">{curso.moneda}</span>
                  </div>

                  <button
                    className="flex items-center gap-2 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base transition-all brightness-90 hover:brightness-110"
                    style={{ backgroundColor: curso.colorPrimario }}
                  >
                    Inscribirme
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              {/* Borde inferior de color primario */}
              <div
                className="h-1 w-full"
                style={{ backgroundColor: curso.colorPrimario }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}