import { AboutContainer, AboutSection, AboutText, AboutTitle } from "./styled";
import { TeamImage } from "../../common/TeamImage";
import teamImage from "../../assets/images/teamImage.jpg";
import { serwis } from "../../utils/serwis";

export const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTitle>Kim jesteśmy</AboutTitle>
        <AboutText>{serwis.about}</AboutText>
        <TeamImage src={teamImage} alt="team" />
      </AboutContainer>
    </AboutSection>
  );
};
