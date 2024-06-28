import { Hero, HeroButton, HeroContainer, HeroText, HeroTitle } from "./styled";

export const Home = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroTitle>
          Profesjonalna naprawa pralek <br />i ekspresów do kawy
        </HeroTitle>
        <HeroText>Rzetelnie, szybko i skutecznie!</HeroText>
        <HeroButton href="tel:+48123456789">Zadzwoń teraz</HeroButton>
        <HeroButton href="#contact">Umów wizytę</HeroButton>
      </HeroContainer>
    </Hero>
  );
};
