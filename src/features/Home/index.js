import {
  Hero,
  HeroButton,
  HeroContainer,
  HeroText,
  HeroTitle,
  StyledLink,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { CoffeeMachine } from "./CoffeeMachine";
import { WashingMachine } from "./WashingMachine";
import { Television } from "./Television";
import { Dishwasher } from "./Dishwasher";
import { useEffect, useState } from "react";

export const Home = () => {
  const [activeScene, setActiveScene] = useState([null, null]);
  const scene = {
    first: ["washingMachine", "coffeeMachine"],
    second: ["washingMachine", "dishwasher"],
    third: ["television", "dishwasher"],
    fourth: ["television", "coffeeMachine"],
  };

  useEffect(() => {
    const interval = setInterval(() => {
      switch (activeScene.toString()) {
        case scene.first.toString():
          setActiveScene(scene.second);
          break;
        case scene.second.toString():
          setActiveScene(scene.third);
          break;
        case scene.third.toString():
          setActiveScene(scene.fourth);
          break;
        case scene.fourth.toString():
          setActiveScene(scene.first);
          break;
        default:
          setActiveScene(scene.first);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [activeScene]);

  return (
    <Hero>
      <WashingMachine show={activeScene[0] === "washingMachine"} />
      <CoffeeMachine show={activeScene[1] === "coffeeMachine"} />
      <Television show={activeScene[0] === "television"} />
      <Dishwasher show={activeScene[1] === "dishwasher"} />
      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa
          <br />
          pralek, zmywarek,
          <br />
          telewizorów
          <br /> i&nbsp;ekspresów do&nbsp;kawy
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i skutecznie!</HeroText>
        <HeroButton href={`tel:${serwis.phone}`}>Zadzwoń teraz</HeroButton>
        <StyledLink to="/contact">Umów wizytę</StyledLink>
      </HeroContainer>
    </Hero>
  );
};
