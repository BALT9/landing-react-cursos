import './App.css'
import Cursos from './components/Home/Cursos'
import Hero from './components/Home/Hero'

import Angular from '/postAngular.jpg';
import ChatbotLaravel from '/chatbotLaravel.png';
import ChatbotCloudApi from '/chatbotCloudApi.png';
import ReactImg from '/postReact.png';


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
      colorPrimario: "#61DAFB", // Azul React
      inicio: "2 de Enero",
    },
  ];

  return (
    <>
      <Hero cursos={cursos}/>
      <Cursos cursos={cursos}/>
    </>
  )
}

export default App
