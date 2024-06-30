import zmywarka from "../../../assets/images/zmywarka.png";
import { DishwasherWrapper } from "./styled";

export const Dishwasher = ({ show }) => {
  return (
    <DishwasherWrapper $show={show}>
      <img src={zmywarka} alt="zmywarka" />
    </DishwasherWrapper>
  );
};
