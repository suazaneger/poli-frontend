import { Slider } from "./Slider";

import IA from "../../assets/images/IA.jpg";
import teamAI from "../../assets/images/teamsIA.jpg";
import marketingIA from "../../assets/images/marketingIA.jpg";

export const SliderContainer = () => {
  const images = [IA, teamAI, marketingIA];
  const texts = [
    "Potenciamos tus proyectos con la vanguardia de la Inteligencia Artificial, con algoritmos avanzados para ofrecerte soluciones",
    "Hemos construido un equipo apasionado y expertos en tecnologías IA, que se dedican a ofrecer resultados excepcionales.",
    "En IntegraIA Tech, estamos impulsados por la visión de transformar empresas a través de la innovación tecnológica.",
  ];
  const classNames = [
    "bg-purple-600 border border-purple-800 shadow-lg rounded-lg mr-2",
    "bg-blue-600 border border-blue-800 shadow-lg rounded-lg mr-2",
    "bg-pink-600 border border-pink-800 shadow-lg rounded-lg",
  ];

  return (
    <section className="mt-8 px-8 pt-6 -mx-2">
      <Slider images={images} texts={texts} classNames={classNames} />
    </section>
  );
};
