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
  const scene = {
    // ["washingMachine", "coffeeMachine","dishwasher"," "television"],
    0: [0, 0, 0, 0],
    1: [1, 1, 0, 0],
    2: [0, 1, 0, 0],
    3: [0, 1, 0, 1],
    4: [0, 0, 0, 1],
    5: [0, 0, 1, 1],
    6: [0, 0, 1, 0],
    7: [1, 0, 1, 0],
    8: [1, 0, 0, 0],
  };
  const mobileScene = {
    0: [0, 0, 0, 0],
    1: [1, 0, 0, 0],
    2: [0, 0, 0, 0],
    3: [0, 1, 0, 0],
    4: [0, 0, 0, 0],
    5: [0, 0, 1, 0],
    6: [0, 0, 0, 0],
    7: [0, 0, 0, 1],
    8: [0, 0, 0, 0],
  };
  const isMobile = window.screen.width <= 1350;
  const [activeScene, setActiveScene] = useState({
    reset: false,
    number: 0,
    content: isMobile ? mobileScene[0] : scene[0],
  });

  useEffect(() => {
    setActiveScene({
      reset: true,
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
          reset: false,
          number: sceneNumber,
          content: isMobile ? mobileScene[sceneNumber] : scene[sceneNumber],
        });
      },
      isTransition ? 5000 : 1500
    );

    return () => clearInterval(interval);
  }, [activeScene]);

  return (
    <Hero>
      {/* <WashingMachine show={true} center={isMobile} />
      <CoffeeMachine show={true} center={isMobile} />
      <Dishwasher show={true} center={isMobile} />
      <Television show={true} center={isMobile} /> */}

      <WashingMachine show={activeScene.content[0]} center={isMobile} />
      <CoffeeMachine show={activeScene.content[1]} center={isMobile} />
      <Dishwasher show={activeScene.content[2]} center={isMobile} />
      <Television show={activeScene.content[3]} center={isMobile} />
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
        {/* <StyledLink to="/contact">Umów wizytę</StyledLink> */}
      </HeroContainer>
    </Hero>
  );
};
