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
import { Decoration } from "../../core/App/Decoration";

export const Home = () => {
  const scene = {
    0: [null, null],
    1: ["washingMachine", "coffeeMachine"],
    2: ["washingMachine", null],
    3: ["washingMachine", "dishwasher"],
    4: [null, "dishwasher"],
    5: ["television", "dishwasher"],
    6: ["television", null],
    7: ["television", "coffeeMachine"],
    8: [null, "coffeeMachine"],
  };
  const mobileScene = {
    0: [null],
    1: ["washingMachine"],
    2: [null],
    3: ["coffeeMachine"],
    4: [null],
    5: ["dishwasher"],
    6: [null],
    7: ["television"],
    8: [null],
  };
  const isMobile = window.screen.width <= 1400;
  const [activeScene, setActiveScene] = useState({
    number: 0,
    content: isMobile ? mobileScene[0] : scene[0],
  });

  useEffect(() => {
    setActiveScene({
      number: 0,
      content: isMobile ? mobileScene[0] : scene[0],
    });
  }, [isMobile]);

  useEffect(() => {
    let sceneNumber = activeScene.number >= 8 ? 1 : activeScene.number + 1;
    let isTransition = sceneNumber % 2 === 0 ? true : false;
    const interval = setInterval(
      () => {
        setActiveScene({
          number: sceneNumber,
          content: isMobile ? mobileScene[sceneNumber] : scene[sceneNumber],
        });
      },
      isTransition ? 5000 : 1500
    );

    return () => clearInterval(interval);
  }, [activeScene]);
  const scenneConntentForCoffeeMachine = isMobile
    ? activeScene.content[0] === "coffeeMachine"
    : activeScene.content[1] === "coffeeMachine";
  const scenneConntentForDishwasher = isMobile
    ? activeScene.content[0] === "dishwasher"
    : activeScene.content[1] === "dishwasher";

  return (
    <Hero>
      <WashingMachine
        show={activeScene.content[0] === "washingMachine"}
        center={isMobile}
      />
      <CoffeeMachine show={scenneConntentForCoffeeMachine} center={isMobile} />
      <Television
        show={activeScene.content[0] === "television"}
        center={isMobile}
      />
      <Dishwasher show={scenneConntentForDishwasher} center={isMobile} />
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
