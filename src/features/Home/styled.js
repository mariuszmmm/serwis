import styled from "styled-components";

export const Hero = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  background-image: url("../assets/images/hero-background.jpg");
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  padding: 100px 0;
  min-height: calc(100vh - 50px);
`;

export const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const HeroText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

export const HeroButton = styled.a`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: 1rem;
  text-decoration: none;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }
`;
