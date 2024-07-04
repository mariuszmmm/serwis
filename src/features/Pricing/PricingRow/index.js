import { PricingTd } from "./styled";

export const PricingRow = ({ item }) => {
  const { name, price } = item;

  return (
    <tr>
      <PricingTd>{name}</PricingTd>
      <PricingTd center>od {price} PLN</PricingTd>
    </tr>
  );
};
