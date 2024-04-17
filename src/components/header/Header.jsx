import logo from "../../assets/images/logo.png";
import { NavBar } from "./NavBar";
import { Carousel } from "./Carousel";

const images = [
  "/src/assets/images/slider1.jpg",
  "/src/assets/images/slider2.jpg",
  "/src/assets/images/slider3.jpg",
];

export const Header = () => {
  return (
    <header className="bg-white  px-8">
      <NavBar />
      <Carousel images={images} />
    </header>
  );
};
