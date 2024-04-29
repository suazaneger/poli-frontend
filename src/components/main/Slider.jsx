import React, { useState } from "react";

export const Slider = ({ images, texts, classNames }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calcular la diferencia de altura entre la tarjeta del medio y las tarjetas laterales
  const heightDifference = 486 - 446; // Altura de la tarjeta central - Altura de las tarjetas laterales

  return (
    <div className="overflow-hidden relative">
      <div className="flex justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`px-2 ${classNames[index]} ${
              index === Math.floor(images.length / 2)
                ? "w-[349px] h-[486px]"
                : "w-[319px] h-[446px]"
            }`}
            style={{
              position: "relative",
              zIndex: index === currentIndex ? 1 : 0,
              marginTop:
                index !== Math.floor(images.length / 2)
                  ? `${heightDifference / 2}px`
                  : undefined,
              marginBottom:
                index !== Math.floor(images.length / 2)
                  ? `${heightDifference / 2}px`
                  : undefined,
            }}
            onClick={() => handleClick(index)}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className={`w-full h-auto object-cover mt-4 ${
                index === currentIndex ? "rounded-xl" : ""
              }`}
            />
            <p className="text-center mt-8 mb-2 text-white text-lg tracking-wide">
              {texts[index]}
              <button className="absolute left-1/2 transform -translate-x-1/2 bottom-12 bg-blue-integraIA text-white px-8 py-2 rounded-full">
                Ver Más
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
