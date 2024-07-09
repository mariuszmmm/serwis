import styled, { css } from "styled-components";

export const AboutSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 5vh);
  transition: opacity 1s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h1`
  margin-bottom: 40px;
  font-size: clamp(1.5rem, 3vw, 3rem);
`;

export const AboutText = styled.p`
  line-height: 1.8;
  margin: 0 20px 30px;
  font-size: clamp(0.7rem, 2.5vw, 1.2rem);
  text-align: justify;
`;
