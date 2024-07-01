import zmywarka from "../../../assets/images/zmywarka.png";
import { DishwasherWrapper, Image } from "./styled";

export const Dishwasher = ({ show, center }) => {
  return (
    <DishwasherWrapper $show={show} $center={center}>
      <Image src={zmywarka} alt="zmywarka"  $center={center}/>
    </DishwasherWrapper>
  );
};
