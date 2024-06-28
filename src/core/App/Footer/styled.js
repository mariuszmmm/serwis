import styled from "styled-components";
import { ReactComponent as facebookIcon } from "../../../assets/images/facebook.svg";
import { ReactComponent as instagramIcon } from "../../../assets/images/instagram.svg";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: 50px;
  filter: brightness(120%);
  font-size: 0.8rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 0 20px;
  height: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 10px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
`;

const styledIcon = (icon) => styled(icon)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.2);
  }
`;

export const FacebookIcon = styledIcon(facebookIcon);
export const InstagramIcon = styledIcon(instagramIcon);
