import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const Carousel = ({ images }) => {
  let [current, setCurrent] = useState(0);

  let previousSlider = () => {
    if (current === 0) setCurrent(images.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlider = () => {
    if (current === images.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="w-[80%]  relative overflow-hidden  justify-between  mx-auto max-w-7xl pt-4">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlider}>
          <BsFillArrowLeftCircleFill />
        </button>

        <button onClick={nextSlider}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};
