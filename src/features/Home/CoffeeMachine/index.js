// import LazyLoad from "react-lazyload";
import ekspres from "../../../assets/images/naprawa-ekspresow.png";
import { CoffeeMachineWrapper, Image } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const CoffeeMachine = ({ show, center, reset, setHold }) => {
  return (
    <CoffeeMachineWrapper
      $show={show}
      $center={center}
      $noDisplay={reset}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
    >
      {/* <LazyLoad> */}
        <Link to="/uslugi#naprawa-ekspresów">
          {/* <Image
            src={ekspres}
            alt="Naprawa ekspresów do kawy w Przemyślu"
            $center={center}
            // loading="lazy"
          /> */}
        </Link>
      {/* </LazyLoad> */}
    </CoffeeMachineWrapper>
  );
};
