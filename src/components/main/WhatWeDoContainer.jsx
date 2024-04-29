import IA from "../../assets/images/IA.jpg";
import teamAI from "../../assets/images/teamsIA.jpg";
import marketingIA from "../../assets/images/marketingIA.jpg";

import { WhatWeDo } from "./WhatWeDo";

export const WhatWeDoContainer = () => {
  return (
    <section className="mt-8 flex justify-between px-8 pt-6 -mx-2">
      <WhatWeDo
        img={IA}
        text="Potenciamos tus proyectos con la vanguardia de la Inteligencia
          Artificial, con algoritmos avanzados para ofrecerte soluciones"
        className="w-[30%] bg-purple-600 border border-purple-800 shadow-lg rounded-lg mr-2"
      />
      <WhatWeDo
        img={teamAI}
        text="Hemos construido un equipo apasionado y expertos en tecnologías IA, que se dedican a ofrecer resultados excepcionales."
        className="w-[30%] bg-blue-600 border border-blue-800 shadow-lg rounded-lg mr-2"
      />
      <WhatWeDo
        img={marketingIA}
        text="En InterAITEch, estamos impulsados por la visión de transformar empresas a través de la innovación tecnológica."
        className="w-[30%] bg-pink-600 border border-pink-800 shadow-lg rounded-lg"
      />
    </section>
  );
};
