export const WhatWeDo = ({ img, text, className }) => {
  return (
    <article className={`relative w-[319px] h-[446px] ${className}`}>
      <div className="absolute inset-0 flex items-start justify-center">
        <img src={img} alt="IA" className="mt-4" />
      </div>
      <div className="absolute inset-x-0 bottom-0 pb-4">
        <p className="text-white  text-[16px] px-2">{text}</p>
      </div>
    </article>
  );
};
