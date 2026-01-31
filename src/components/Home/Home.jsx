import viteLogo from '/vite.svg'

import Angular from '/postAngular.jpg'

const cursos = [
  {
    titulo: "Curso Desarrollo Web Frontend con Angular",
    descripcion: "lorem4",
    precio: "99.99 USD",
    imagen: "",
    duracion: "40h",
    colorPrimario: "",
    inicio: "",
    colorPrimario: ""
  }
];

export default function Home() {
  return (
    <>
        <h1>{cursos[0].titulo}</h1>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={Angular} alt="" />
    </>
  );
}