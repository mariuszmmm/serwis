import LazyLoad from "react-lazyload";
import pralka from "../../../assets/images/naprawa-pralki.png";
import { Image, WashingMachineWrapper } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const WashingMachine = ({ show, center, reset, setHold }) => {
  return (
    <WashingMachineWrapper
      $show={show}
      $center={center}
      $noDisplay={reset}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
    >
      <LazyLoad>
        <Link to="/uslugi#naprawa-pralek">
          <Image
            src={pralka}
            alt="Naprawa pralek w Przemyślu"
            $center={center}
            $show={show}
            loading="lazy"
          />
        </Link>
      </LazyLoad>
    </WashingMachineWrapper>
  );
};
