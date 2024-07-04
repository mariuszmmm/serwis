import { Hero, HeroButton, HeroContainer, HeroText, HeroTitle } from "./styled";
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
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [activeScene, setActiveScene] = useState({
    reset: false,
    number: 0,
    content: isPortrait ? mobileScene[0] : scene[0],
  });

  useEffect(() => {
    if (isPortrait === window.innerHeight > window.innerWidth) return;
    setIsPortrait(window.innerHeight > window.innerWidth);
    setActiveScene({
      ...activeScene,
      reset: true,
      number: 0,
    });
    // eslint-disable-next-line
  }, [window.innerHeight, window.innerWidth]);

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
    // eslint-disable-next-line
  }, [activeScene]);

  return (
    <Hero>
      {/* <WashingMachine show={true} center={isPortrait} />
      <CoffeeMachine show={true} center={isPortrait} />
      <Dishwasher show={true} center={isPortrait} />
      <Television show={true} center={isPortrait} /> */}

      <WashingMachine
        show={activeScene.content[0]}
        center={isPortrait}
        reset={activeScene.reset}
      />
      <CoffeeMachine
        show={activeScene.content[1]}
        center={isPortrait}
        reset={activeScene.reset}
      />
      <Dishwasher
        show={activeScene.content[2]}
        center={isPortrait}
        reset={activeScene.reset}
      />
      <Television
        show={activeScene.content[3]}
        center={isPortrait}
        reset={activeScene.reset}
      />
      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa pralek, zmywarek,
          <br /> telewizorów
          <br /> i&nbsp;ekspresów do&nbsp;kawy
          <br />
          w&nbsp;Przemyślu
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i skutecznie!</HeroText>
        <HeroButton href={`tel:${serwis.phone}`}>Zadzwoń teraz</HeroButton>
        <HeroText $notShow={isPortrait}>
          {" "}
          <br />
          Z ponad 20-letnim doświadczeniem <br />w naprawie sprzętu RTV i AGD,
          <br />
          zapewniamy najwyższą jakość usług <br />
          dla naszych klientów."
        </HeroText>
        {/* <StyledLink to="/kontakt">Umów wizytę</StyledLink> */}
      </HeroContainer>
    </Hero>
  );
};
