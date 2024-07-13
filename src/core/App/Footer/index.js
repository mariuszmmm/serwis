import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  SocialIcon,
  SocialIcons,
  FacebookIcon,
  GoogleIcon,
  PhoneLink,
  MailLink,
  FooterInfo,
  FooterCopy,
} from "./styled";
import { serwis } from "../../../utils/serwis";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterInfo>
          <FooterText>
            telefon:{" "}
            <PhoneLink href={`tel:${serwis.phone}`}> {serwis.phone}</PhoneLink>
          </FooterText>
          <FooterText>
            e-mail:{" "}
            <MailLink href={`mailto:${serwis.email}}`}>{serwis.email}</MailLink>
          </FooterText>
        </FooterInfo>

        <SocialIcons>
          <FooterText>
            <SocialIcon
              href={serwis.url.facebook}
              title="Odwiedź naszą stronę na Facebooku"
              aria-label="Facebook strona Serwis RTV i AGD"
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
            >
              google
              <GoogleIcon />
            </SocialIcon>
          </FooterText>
        </SocialIcons>
        <FooterCopy>
          &copy; 2024 {serwis.name}. Wszelkie prawa zastrzeżone.
        </FooterCopy>
      </FooterContainer>
    </FooterWrapper>
  );
};
