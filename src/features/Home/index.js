import {
  Hero,
  HeroContainer,
  HeroSubText,
  HeroText,
  HeroTitle,
} from "./styled";
import { serwis } from "../../utils/serwis";
import { CoffeeMachine } from "./CoffeeMachine";
import { WashingMachine } from "./WashingMachine";
import { Television } from "./Television";
import { Dishwasher } from "./Dishwasher";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { Button } from "../../common/Buttons";
import { HelmetForHome } from "./HemletForHome";
import { mobileScene, scene } from "./scenes";

export const Home = () => {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );
  const [activeScene, setActiveScene] = useState({
    reset: false,
    number: 0,
    content: isPortrait ? mobileScene[0] : scene[0],
  });
  const [show, setShow] = useState(false);

  const handleResize = () => {
    const actualState = window.innerHeight > window.innerWidth;
    if (isPortrait === actualState) return;
    setIsPortrait(actualState);
    setActiveScene({
      ...activeScene,
      reset: true,
      number: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };

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

  useEffect(() => {
    setShow(true);
  }, []);

  const handleClick = () => {
    ReactGA.event({
      category: "User",
      action: "Clicked on button",
    });
  };

  return (
    <Hero $show={show}>
      <HelmetForHome />
      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa pralek, zmywarek,
          <br /> telewizorów
          <br /> i&nbsp;ekspresów do&nbsp;kawy
          <br />
          w&nbsp;Przemyślu
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i skutecznie!</HeroText>
        <Button href={`tel:${serwis.phone}`} onClick={handleClick}>
          Zadzwoń teraz
        </Button>
        <HeroSubText $notShow={isPortrait}>
          {" "}
          <br />
          Z ponad 20-letnim doświadczeniem <br />w naprawie sprzętu RTV i AGD,
          <br />
          zapewniamy najwyższą jakość usług <br />
          dla naszych klientów.
        </HeroSubText>
        {/* <StyledLink to="/kontakt">Umów wizytę</StyledLink> */}
      </HeroContainer>
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
      {/* <WashingMachine show={true} center={isPortrait} />
      <CoffeeMachine show={true} center={isPortrait} />
      <Dishwasher show={true} center={isPortrait} />
      <Television show={true} center={isPortrait} /> */}
    </Hero>
  );
};
