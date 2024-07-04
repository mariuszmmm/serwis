import {
  PricingContainer,
  PricingSection,
  PricingTable,
  PricingTh,
  PricingTitle,
} from "./styled";
import { PricingRow } from "./PricingRow";
import { serwis } from "../../utils/serwis";
import { Helmet } from "react-helmet";
export const Pricing = () => {
  return (
    <PricingSection>
      <Helmet>
        <title>Cennik - Naprawa RTV i AGD - Przemyśl</title>
        <meta
          name="description"
          content="Sprawdź nasze ceny za usługi naprawy RTV i AGD w Przemyślu. Oferujemy konkurencyjne ceny i wysoką jakość usług."
        />
      </Helmet>
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
            {serwis.pricing.map((pri, index) => (
              <PricingRow item={pri} key={index} />
            ))}
          </tbody>
        </PricingTable>
      </PricingContainer>
    </PricingSection>
  );
};
