import { AboutContainer, AboutSection, AboutTitle } from "./styled";
import { TeamImage } from "../../common/TeamImage";
import teamImage from "../../assets/images/teamImage.jpg";
import { serwis } from "../../utils/serwis";
import { AboutText } from "./AboutText";

export const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTitle>Kim jestem</AboutTitle>
        {serwis.about.map((item, index) => (
          <AboutText item={item} key={index} />
        ))}
        <TeamImage src={teamImage} alt="team" />
      </AboutContainer>
    </AboutSection>
  );
};
