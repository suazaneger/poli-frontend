import { Header } from "./components/header/Header";
import { SliderContainer } from "./components/main/SliderContainer";
import { Title } from "./components/main/Title";
import { CardContainer } from "./components/main/CardContainer";

function App() {
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
      </main>
    </>
  );
}

export default App;
