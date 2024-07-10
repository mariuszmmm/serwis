import LazyLoad from "react-lazyload";
import zmywarka from "../../../assets/images/serwis-zmywarek.png";
import { DishwasherWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const Dishwasher = ({ show, center, reset }) => {
  return (
    <DishwasherWrapper $show={show} $center={center} $noDisplay={reset}>
      <LazyLoad>
        <Link smooth to="/uslugi#naprawa-zmywarek">
          <Image
            src={zmywarka}
            alt="Serwis zmywarek w Przemyślu"
            $center={center}
          />
        </Link>
      </LazyLoad>
    </DishwasherWrapper>
  );
};
