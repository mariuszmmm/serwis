import zmywarka from "../../../assets/images/zmywarka.png";
import { DishwasherWrapper } from "./styled";

export const Dishwasher = ({ show, center }) => {
  return (
    <DishwasherWrapper $show={show} $center={center}>
      <img src={zmywarka} alt="zmywarka" />
    </DishwasherWrapper>
  );
};
