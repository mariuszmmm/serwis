import LazyLoad from "react-lazyload";
import ekspres from "../../../assets/images/naprawa-ekspresow.png";
import { CoffeeMachineWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const CoffeeMachine = ({ show, center, reset }) => {
  return (
    <CoffeeMachineWrapper $show={show} $center={center} $noDisplay={reset}>
      <LazyLoad>
        <Link to="/uslugi#naprawa-ekspresów">
          <Image
            src={ekspres}
            alt="Naprawa ekspresów do kawy w Przemyślu"
            $center={center}
          />
        </Link>
      </LazyLoad>
    </CoffeeMachineWrapper>
  );
};
