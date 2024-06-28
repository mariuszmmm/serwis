import {
  Icon,
  FooterContainer,
  FooterText,
  FooterWrapper,
  SocialIcon,
  SocialIcons,
  FacebookIcon,
  InstagramIcon,
} from "./styled";

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterText>
          &copy; 2024 Naprawa AGD. Wszelkie prawa zastrzeżone.
        </FooterText>
        <SocialIcons>
          <SocialIcon href="" target="_blank">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon href="" target="_blank">
            <InstagramIcon />
          </SocialIcon>
        </SocialIcons>
      </FooterContainer>
    </FooterWrapper>
  );
};
