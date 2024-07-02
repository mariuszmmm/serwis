import zmywarka from "../../../assets/images/zmywarka.png";
import { DishwasherWrapper, Image } from "./styled";

export const Dishwasher = ({ show, center, reset }) => {
  return (
    <DishwasherWrapper $show={show} $center={center} $noDisplay={reset}>
      <Image src={zmywarka} alt="zmywarka" $center={center} />
    </DishwasherWrapper>
  );
};
