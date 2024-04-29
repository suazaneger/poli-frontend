import logo from "../../assets/images/logo.png";
import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";

import { NavBar } from "./NavBar";
import { Carousel } from "./Carousel";
import { WhatWeDo } from "../main/WhatWeDo";

const images = [slider1, slider2, slider3];

export const Header = () => {
  return (
    <header className="bg-white  px-8">
      <NavBar />
      <Carousel images={images} />
    </header>
  );
};
