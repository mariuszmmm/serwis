import styled, { css } from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 100px 0;
  text-align: center;
  opacity: 0;
  min-height: 100vh;  transition: opacity 0.5s ease-in-out;
  ${({ $show }) =>
    $show &&
    css`
      opacity: 1;
    `}
`;

export const TestimonialsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const TestimonialsTitle = styled.h1`
  margin-bottom: 40px;
  font-size: clamp(1.5rem, 3vw, 3rem);
`;
