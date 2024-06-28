import {
  Hero,
  HeroButton,
  HeroContainer,
  HeroText,
  HeroTitle,
  StyledLink,
} from "./styled";
import { serwis } from "../../utils/serwis";

export const Home = () => {
  return (
    <Hero>
      <HeroContainer>
        <HeroTitle>
          {serwis.header[0]} <br />
          {serwis.header[1]}
        </HeroTitle>
        <HeroText> {serwis.subheader}</HeroText>
        <HeroButton href={`tel:${serwis.phone}`}>Zadzwoń teraz</HeroButton>
        <StyledLink to="/contact">Umów wizytę</StyledLink>
      </HeroContainer>
    </Hero>
  );
};
