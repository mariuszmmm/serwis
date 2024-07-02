import styled from "styled-components";

export const PricingSection = styled.section`
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const PricingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const PricingTitle = styled.h1`
  margin-bottom: 20px;
  font-size: clamp(1.5rem, 3vw, 4rem);
`;

export const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
  background: rgba(40, 40, 40, 0.8);
`;

export const PricingTh = styled.th`
  padding: 15px;
  background-color: ${({ theme }) => theme.color.tableHeader};
  border: 1px solid ${({ theme }) => theme.color.border};
`;
