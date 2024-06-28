import {
  Icon,
  FooterContainer,
  FooterText,
  FooterWrapper,
  SocialIcon,
  SocialIcons,
  FacebookIcon,
  GoogleIcon,
} from "./styled";
import { serwis } from "../../../utils/serwis";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          &copy; 2024 Naprawa AGD. Wszelkie prawa zastrzeżone.
        </FooterText>
        <SocialIcons>
          <SocialIcon href={serwis.url.facebook} target="_blank">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon href={serwis.url.google} target="_blank">
            <GoogleIcon />
          </SocialIcon>
        </SocialIcons>
      </FooterContainer>
    </FooterWrapper>
  );
};
