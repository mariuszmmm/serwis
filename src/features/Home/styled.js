import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Hero = styled.section`
  text-align: center;
  padding: 100px 0;
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(1.8rem, 8vw, 5rem);
`;

export const HeroText = styled.p`
  margin-bottom: 50px;
  font-size: clamp(0.8rem, 3.5vw, 2rem);

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 30px;
  }
`;

const buttonStyles = css`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: clamp(0.7rem, 2vw, 2rem);
  text-decoration: none;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px 15px;
    margin: 0 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 10px 10px;
    margin: 0 5px;
  }
`;

export const HeroButton = styled.a`
  ${buttonStyles}
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
`;
