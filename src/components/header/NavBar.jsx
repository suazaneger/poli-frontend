import logo from "../../assets/images/logo.png";
import burgerMenu from "../../assets/images/burger-menu.png";

export const NavBar = () => {
  return (
    <nav className="bg-white   flex justify-between  mx-auto max-w-7xl ">
      {/* Columna para el logo */}
      <div>
        <img src={logo} alt="logo" />
      </div>

      {/* Columna para el menu */}
      <div className="flex  items-end  ">
        <ul className=" hidden  text-lg sm:flex text-[24px] sm:w-[638px] sm:place-content-around sm:text-[16px] sm:items-center ">
          <li>
            <a
              href="#"
              className="mr-4 text-lg font-bold text-blue-integraIA  border-solid  shadow-lg shadow-indigo-500/50 py-2 px-2"
            >
              Inicio Integra &#x2193;
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-lg font-bold transition-colors hover:text-blue-integraIA  border-solid  shadow-lg shadow-indigo-500/50 py-2 px-2"
            >
              Servicios &#x2193;
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-lg font-bold transition-colors hover:text-blue-integraIA  border-solid  shadow-lg shadow-indigo-500/50 py-2 px-2"
            >
              Proyectos &#x2193;
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-lg font-bold transition-colors hover:text-blue-integraIA"
            >
              Casos de Éxito
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-lg font-bold transition-colors hover:text-blue-integraIA"
            >
              Blog
            </a>
          </li>
        </ul>
        <img
          className="w-10 h-4 cursor-pointer sm:hidden"
          src={burgerMenu}
          alt="Menu Hamburguesa"
        />
      </div>

      {/* Columna para los botones */}
      <div className="bg-white flex  items-center justify-end mt-1">
        <button className="btn-custom hover:bg-black">Contactanos</button>
        <button className="btn-custom hover:bg-black ml-4">Ingresar</button>
      </div>
    </nav>
  );
};
