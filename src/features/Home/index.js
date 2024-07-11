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
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga4";
import { Button } from "../../common/Buttons";

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
      <HelmetProvider>
        <div>
          <Helmet>
            <title>
              Naprawa telewizorów, pralek, zmywarek i ekspresów do kawy
            </title>
            <meta
              name="description"
              content="Profesjonalna naprawa i serwis telewizorów, pralek, zmywarek oraz ekspresów do kawy w Przemyślu. Szybka pomoc i fachowa obsługa."
            />
            <meta
              name="keywords"
              content="naprawa, serwis, RTV, AGD, telewizory, pralki, zmywarki, ekspresy do kawy, Przemyśl"
            />
            <link rel="canonical" href="https://naprawaprzemysl.pl/" />
            <meta
              property="og:title"
              content="Naprawa telewizorów, pralek, zmywarek i ekspresów do kawy"
            />
            <meta
              property="og:description"
              content="Profesjonalna naprawa i serwis telewizorów, pralek, zmywarek oraz ekspresów do kawy w Przemyślu. Szybka pomoc i fachowa obsługa."
            />
            <meta property="og:url" content="https://naprawaprzemysl.pl/" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Serwis RTV i AGD",
                "@id": "https://naprawaprzemysl.pl",
                url: "https://naprawaprzemysl.pl",
                telephone: "+48 790 258 612",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Generała Józefa Sowińskiego 2",
                  addressLocality: "Przemyśl",
                  postalCode: "37-700",
                  addressCountry: "PL",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 49.782778,
                  longitude: 22.776028,
                },
                openingHoursSpecification: [
                  {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                    ],
                    opens: "09:30",
                    closes: "17:00",
                  },
                ],
                sameAs: [
                  "https://www.facebook.com/profile.php?id=100063811592941",
                ],
                makesOffer: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Naprawa pralek",
                    },
                    areaServed: {
                      "@type": "Place",
                      name: "Przemyśl",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Naprawa zmywarek",
                    },
                    areaServed: {
                      "@type": "Place",
                      name: "Przemyśl",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Naprawa ekspresów do kawy",
                    },
                    areaServed: {
                      "@type": "Place",
                      name: "Przemyśl",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Naprawa telewizorów",
                    },
                    areaServed: {
                      "@type": "Place",
                      name: "Przemyśl",
                    },
                  },
                ],
              })}
            </script>
          </Helmet>
          {/* Inne elementy Twojego komponentu */}
        </div>
      </HelmetProvider>
      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa pralek, zmywarek,
          <br /> telewizorów
          <br /> i&nbsp;ekspresów do&nbsp;kawy
          <br />
          w&nbsp;Przemyślu
        </HeroTitle>
        <HeroText> Rzetelnie, szybko i skutecznie!</HeroText>
        <Button
          href={`tel:${serwis.phone}`}
          // title="tel. +48 790-258-612"
          onClick={handleClick}
        >
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
