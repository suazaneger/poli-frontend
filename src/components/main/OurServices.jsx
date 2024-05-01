import services from "../../assets/images/ourServices.png";

export const OurServices = () => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mt-12">
      <p className="text-center text-blue-integraIA font-bold leading-loose text-2xl">
        Como fábrica de desarrollo de software, nos comprometemos a ofrecer
        soluciones tecnológicas de vanguardia, trabajando con pasión y
        dedicación para impulsar el éxito de empresas en Colombia y más allá.
        Nuestro compromiso es continuar innovando y superando expectativas en
        cada proyecto que emprendemos.
      </p>
      <img src={services} alt={services} className="mx-auto" />
    </div>
  );
};
