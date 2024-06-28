import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h2`
  margin-bottom: 20px;
  font-size: clamp(2rem, 4.5vw, 2.5rem);
`;

export const AboutText = styled.p`
  line-height: 1.8;
  margin: 0 15px 30px;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`;
