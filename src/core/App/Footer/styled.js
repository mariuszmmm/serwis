import styled from "styled-components";
import { ReactComponent as facebookIcon } from "../../../assets/images/facebook.svg";
import { ReactComponent as googleIcon } from "../../../assets/images/google.svg";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: 5vh;
  font-size: 0.8rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: clamp(0.3rem, 2.5vw, 0.6rem);
`;

export const SocialIcons = styled.div`
  padding-left: 50px;
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
  width: 3vh;
  height: 3vh;
  border-radius: 50%;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    transform: scale(1.2);
  }
`;

export const FacebookIcon = styledIcon(facebookIcon);
export const GoogleIcon = styledIcon(googleIcon);
