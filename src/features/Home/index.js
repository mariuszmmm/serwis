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
    1: [1, 0, 1, 0],
    2: [0, 0, 0, 0],
    3: [0, 1, 0, 1],
    4: [0, 0, 0, 0],
    5: [1, 0, 1, 0],
    6: [0, 0, 0, 0],
    7: [0, 1, 0, 1],
    8: [0, 0, 0, 0],
  };
  const mobileScene = {
    0: [0, 0, 0, 0],
    1: [1, 0, 0, 0],
    2: [0, 0, 0, 0],
    3: [0, 0, 1, 0],
    4: [0, 0, 0, 0],
    5: [0, 1, 0, 0],
    6: [0, 0, 0, 0],
    7: [0, 0, 0, 1],
    8: [0, 0, 0, 0],
  };
  const isPortrait = window.innerHeight > window.innerWidth;
  const [activeScene, setActiveScene] = useState({
    reset: false,
    number: 0,
    content: isPortrait ? mobileScene[0] : scene[0],
  });

  useEffect(() => {
    setActiveScene({
      reset: true,
      number: 0,
      content: isPortrait ? mobileScene[0] : scene[0],
    });
  }, [isPortrait]);

  useEffect(() => {
    let sceneNumber = activeScene.number >= 8 ? 1 : activeScene.number + 1;
    let isTransition = sceneNumber % 2 === 0 ? true : false;
    const interval = setInterval(
      () => {
        setActiveScene({
          reset: false,
          number: sceneNumber,
          content: isPortrait ? mobileScene[sceneNumber] : scene[sceneNumber],
        });
      },
      isTransition ? 5000 : 1500
    );

    return () => clearInterval(interval);
  }, [activeScene]);

  return (
    <Hero>
      {/* <WashingMachine show={true} center={isPortrait} />
      <CoffeeMachine show={true} center={isPortrait} />
      <Dishwasher show={true} center={isPortrait} />
      <Television show={true} center={isPortrait} /> */}

      <WashingMachine show={activeScene.content[0]} center={isPortrait} />
      <CoffeeMachine show={activeScene.content[1]} center={isPortrait} />
      <Dishwasher show={activeScene.content[2]} center={isPortrait} />
      <Television show={activeScene.content[3]} center={isPortrait} />
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
