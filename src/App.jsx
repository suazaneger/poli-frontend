import { Header } from "./components/header/Header";
import { SliderContainer } from "./components/main/SliderContainer";
import { Title } from "./components/main/Title";
import { CardContainer } from "./components/main/CardContainer";
import { OurTeam } from "./components/main/OurTeam";
import { OurServices } from "./components/main/OurServices";
import csuaza from "./assets/images/csuaza.png";

function App() {
  const teamMembers = [
    {
      photo: csuaza,
      name: "Cesar  Suaza",
      position: "Full Stack Developer",
    },
    {
      photo: csuaza,
      name: "Juan Diego",
      position: "Frondend Developer",
    },
    {
      photo: csuaza,
      name: "Daniela Rubio",
      position: "Project Manager",
    },
    {
      photo: csuaza,
      name: "Slendy Pulido",
      position: "Web Designer",
    },
    {
      photo: csuaza,
      name: "Andy Usuaga",
      position: "backend Developer",
    },
  ];

  return (
    <>
      <header className="px-8 pt-6">
        <Header />
      </header>

      <main className="px-8 pt-6">
        <Title part1="LO" part2="QUE" part3="HACEMOS" />
        <SliderContainer />
        <Title part1="COMO" part2="LO" part3="HACEMOS" />
        <CardContainer />
        <Title part1="NUESTRO" part2="" part3="EQUIPO" />
        <OurTeam teamMembers={teamMembers} />
        <Title part1="NUESTROS" part2="" part3="SERVICIOS" />
        <OurServices />
        <Title part1="NUESTROS" part2="" part3="PROYECTOS" />
        <Title part1="NUESTROS" part2="" part3="CLIENTES" />
        <Title part1="COMENTARIOS" part2="Y" part3="OPINIONES" />
      </main>
    </>
  );
}

export default App;
