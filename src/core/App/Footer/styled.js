import styled from "styled-components";
import { ReactComponent as facebookIcon } from "../../../assets/images/facebook.svg";
import { ReactComponent as googleIcon } from "../../../assets/images/google.svg";

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  height: min-content;
  padding: 1vh 0;
  font-size: 0.8rem;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 10px;
  max-width: 1500px;
  margin: 10px auto 0;
  padding: 0 15px;
  height: 100%;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  text-align: left;
  gap: 5px;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: clamp(0.3rem, 1.9vw, 0.7rem);
  font-weight: 200;
`;

export const FooterCopy = styled.p`
  margin: 10px 0 3px;
  font-size: clamp(0.2rem, 1.9vw, 0.6rem);
  font-weight: 200;
  grid-column: 1 / 3;
`;

export const SocialIcons = styled.div`
  padding-left: clamp(10px, 2.5vw, 50px);
  display: flex;
  gap: clamp(5px, 2.5vw, 15px);
  margin: 0;
  text-align: left;
  justify-self: right;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  text-decoration: none;
  gap: 5px;
  color: ${({ theme }) => theme.color.white};
  transition: color 0.3s ease, transform 0.05s ease;

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;

const styledIcon = (icon) => styled(icon)`
  width: 3vh;
  height: 3vh;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
  color: inherit;
`;

export const FacebookIcon = styledIcon(facebookIcon);
export const GoogleIcon = styledIcon(googleIcon);

export const MailLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const PhoneLink = styled.a`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.color.button};
  }

  &:active {
    color: ${({ theme }) => theme.color.white};
  }
`;
