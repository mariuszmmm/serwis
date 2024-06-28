import { AboutContainer, AboutSection, AboutText, AboutTitle } from "./styled";
import { TeamImage } from "../../common/TeamImage";
import teamImage from "../../assets/images/teamImage.jpg";

export const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTitle>Kim jesteśmy</AboutTitle>
        <AboutText>
          Jesteśmy firmą z wieloletnim doświadczeniem w naprawie pralek
          automatycznych i ekspresów do kawy. Nasz zespół składa się z
          wykwalifikowanych techników, którzy z pasją podchodzą do każdej
          naprawy.
        </AboutText>
        <TeamImage src={teamImage} alt="team" />
      </AboutContainer>
    </AboutSection>
  );
};
