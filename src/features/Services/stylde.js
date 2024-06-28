import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.color.background};
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServicesTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const ServiceItem = styled.div`
  margin-bottom: 40px;
`;

export const ServiceIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
`;

export const ServiceText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;
