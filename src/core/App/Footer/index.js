import {
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
          &copy; 2024 {serwis.name}. Wszelkie prawa zastrzeżone.
        </FooterText>
        <SocialIcons>
          <FooterText>
            <SocialIcon
              href={serwis.url.facebook}
              title="Odwiedź naszą stronę na Facebooku"
              aria-label="Facebook strona Serwis RTV i AGD"
              // target="_blank"
            >
              facebook
              <FacebookIcon />
            </SocialIcon>{" "}
          </FooterText>
          <FooterText>
            <SocialIcon
              href={serwis.url.google}
              title="Odwiedź naszą wizytówkę w Google"
              aria-label="Google strona Serwis RTV i AGD"
              // target="_blank"
            >
              google
              <GoogleIcon />
            </SocialIcon>
          </FooterText>
        </SocialIcons>
      </FooterContainer>
    </FooterWrapper>
  );
};
