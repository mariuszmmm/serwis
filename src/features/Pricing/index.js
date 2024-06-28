import {
  PricingContainer,
  PricingSection,
  PricingTable,
  PricingTd,
  PricingTh,
  PricingTitle,
} from "./styled";
export const Pricing = () => {
  return (
    <PricingSection>
      <PricingContainer>
        <PricingTitle>Cennik</PricingTitle>
        <PricingTable>
          <thead>
            <tr>
              <PricingTh>Usługa</PricingTh>
              <PricingTh>Cena</PricingTh>
            </tr>
          </thead>
          <tbody>
            <tr>
              <PricingTd>Naprawa pralki</PricingTd>
              <PricingTd>od 100 PLN</PricingTd>
            </tr>
            <tr>
              <PricingTd>Naprawa ekspresu do kawy</PricingTd>
              <PricingTd>od 120 PLN</PricingTd>
            </tr>
            <tr>
              <PricingTd>Serwis i konserwacja</PricingTd>
              <PricingTd>od 80 PLN</PricingTd>
            </tr>
            <tr>
              <PricingTd>Konsultacje i doradztwo</PricingTd>
              <PricingTd>50 PLN/h</PricingTd>
            </tr>
          </tbody>
        </PricingTable>
      </PricingContainer>
    </PricingSection>
  );
};
