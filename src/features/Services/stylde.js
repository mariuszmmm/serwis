import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const ServicesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 80px;
  font-size: clamp(2rem, 4.5vw, 2.5rem);
`;

export const ServiceIcon = styled.img`
  width: 200px;
  height: 200px;
`;

export const ServiceTitle = styled.h3`
  margin-bottom: 10px;
  font-size: clamp(1.5rem, 3.5vw, 1.8rem);
`;

export const ServiceText = styled.p`
  line-height: 1.6;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
`;

export const ServiceItem = styled.div`
  margin: 0 20px 80px;
`;
