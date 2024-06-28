import {
  PricingContainer,
  PricingSection,
  PricingTable,
  PricingTh,
  PricingTitle,
} from "./styled";
import { PricingRow } from "./PricingRow";
import { serwis } from "../../utils/serwis";
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
            {serwis.pricing.map((pri, index) => (
              <PricingRow item={pri} key={index} />
            ))}
          </tbody>
        </PricingTable>
      </PricingContainer>
    </PricingSection>
  );
};
