import zmywarka from "../../../assets/images/serwis-zmywarek.png";
import { DishwasherWrapper, Image } from "./styled";

export const Dishwasher = ({ show, center, reset }) => {
  return (
    <DishwasherWrapper $show={show} $center={center} $noDisplay={reset}>
      <Image
        src={zmywarka}
        alt="Serwis zmywarek w Przemyślu"
        $center={center}
      />
    </DishwasherWrapper>
  );
};
