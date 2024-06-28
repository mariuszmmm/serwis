import styled from "styled-components";

export const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 30px;
`;
