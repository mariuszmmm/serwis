import LazyLoad from "react-lazyload";
import ekspres from "../../../assets/images/naprawa-ekspresow.png";
import { CoffeeMachineWrapper, Image } from "./styled";

export const CoffeeMachine = ({ show, center, reset }) => {
  return (
    <CoffeeMachineWrapper $show={show} $center={center} $noDisplay={reset}>
      <LazyLoad>
        <Image
          src={ekspres}
          alt="Naprawa ekspresów do kawy w Przemyślu"
          $center={center}
        />
      </LazyLoad>
    </CoffeeMachineWrapper>
  );
};
