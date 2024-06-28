import styled from "styled-components";

export const PricingSection = styled.section`
  background-color: ${({ theme }) => theme.color.background};
  padding: 100px 0;
  text-align: center;
  min-height: calc(100vh - 50px);
`;

export const PricingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const PricingTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const PricingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
`;

export const PricingTh = styled.th`
  padding: 15px;
  background-color: ${({ theme }) => theme.color.tableHeader};
  border: 1px solid ${({ theme }) => theme.color.border};
`;

export const PricingTd = styled.td`
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.color.border};
`;
