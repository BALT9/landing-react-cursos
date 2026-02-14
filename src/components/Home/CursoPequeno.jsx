export default function CursoPequeno({ curso, onClick, numero }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden hover:shadow-md transition cursor-pointer w-full aspect-square"
    >
      <img
        src={curso.imagen}
        alt={curso.titulo}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
