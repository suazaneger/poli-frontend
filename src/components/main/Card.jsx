export const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-sm w-1/5 bg-gray-200 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 text-center mb-8">
      <img className="w-full" src={imageSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="mb-4">
          <div className="font-bold text-blue-integraIA text-xl mb-2 text-center">
            {title}
          </div>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-integraIA hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-5">
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
};
