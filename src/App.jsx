import './App.css'
import Cursos from './components/Home/Cursos'
import Hero from './components/Home/Hero'

import Angular from '/postAngular.jpg';
import ChatbotLaravel from '/chatbotLaravel2.png';
import ChatbotCloudApi from '/chatbotCloudApi.png';
import ReactImg from '/postReact.png';
import n8n from '/n8n.png';
import PostVue from '/PostVue.jpg';


function App() {

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
      grupo: "Curso Desarrollo Web Frontend",
      orden: "3"
    },
    {
      id: 2,
      titulo: "Desarrollo Web Frontend con React/Next",
      descripcion: "Aprende React, el framework para crear aplicaciones Web con interfaces modernas y reactivas.",
      precio: "99.99",
      moneda: "USD",
      imagen: ReactImg,
      duracion: "40 horas",
      colorPrimario: "#61DAFB", // Azul React
      inicio: "2 de Enero",
      grupo: "Curso Desarrollo Web Frontend",
      orden: "4"
    },
    {
      id: 3,
      titulo: "Curso/Taller de Automatización con n8n",
      descripcion: "Aprende a desplegar, conectar e integrar n8n con diferentes aplicaciones y crea agentes de Inteligencia Artificial",
      precio: "39",
      moneda: "USD",
      imagen: n8n,
      duracion: "8 horas",
      colorPrimario: "#ea4b71", // Rosa n8n
      inicio: "",
      grupo: "Taller",
    },
    {
      id: 4,
      titulo: "Curso/Taller de Creación de Chatbots para WhatsApp Cloud Api Conectando con Laravel, Base de Datos e IA ",
      descripcion: "Crea Chatbots, utilizando Laravel, base de datos, inteligencia artificial y despligue en servidores.",
      precio: "29",
      moneda: "USD",
      imagen: ChatbotLaravel,
      duracion: "40h",
      colorPrimario: "#FF2D20", // Rojo Laravel (Cambiado para que resalte)
      inicio: "",
      grupo: "Taller",
      orden: "1"
    },
    {
      id: 5,
      titulo: "Curso/Taller de Creación de Chatbots para WhatsApp Cloud Api Conectando con Base de Datos e IA ",
      descripcion: "Crea Chatbots, utilizando Laravel, base de datos, inteligencia artificial y despligue en servidores.",
      precio: "29",
      moneda: "USD",
      imagen: ChatbotCloudApi,
      duracion: "40h",
      colorPrimario: "#25D366", // Verde WhatsApp
      inicio: "",
      grupo: "Taller",
    },
    {
      id: 6,
      titulo: "Desarrollo Web Frontend con Vue",
      descripcion: "Aprende React, el framework para crear aplicaciones Web con interfaces modernas y reactivas.",
      precio: "99.99",
      moneda: "USD",
      imagen: PostVue,
      duracion: "40 horas",
      colorPrimario: "#01af78", // Verde Vue
      inicio: "18 de Febrero",
      grupo: "Curso Desarrollo Web Frontend",
      orden: "2"
    },
    
  ];

  const numero = 76588737;

  return (
    <>
      <section className="relative bg-gradient-to-br from-black via-slate-950 to-black text-white overflow-hidden">

        {/* Glow azul superior */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] 
                  bg-blue-600/25 rounded-full blur-[140px]"></div>

        {/* Glow azul inferior */}
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] 
                  bg-indigo-600/20 rounded-full blur-[140px]"></div>

        {/* Grid sutil estilo código */}
        <div className="absolute inset-0 
      bg-[linear-gradient(rgba(59,130,246,0.06)_1px,transparent_1px),
          linear-gradient(90deg,rgba(59,130,246,0.06)_1px,transparent_1px)]
      bg-[size:50px_50px]">
        </div>

        <div className="relative z-10">
          <Cursos cursos={cursos} numero={numero} />
          <Hero cursos={cursos} numero={numero} />
        </div>

      </section>

    </>
  )
}

export default App
