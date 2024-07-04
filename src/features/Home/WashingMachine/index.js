import LazyLoad from "react-lazyload";
import pralka from "../../../assets/images/naprawa-pralki.png";
import { Image, WashingMachineWrapper } from "./styled";

export const WashingMachine = ({ show, center, reset }) => {
  return (
    <WashingMachineWrapper $show={show} $center={center} $noDisplay={reset}>
      <LazyLoad>
        <Image src={pralka} alt="Naprawa pralek w Przemyślu" $center={center} />
      </LazyLoad>
    </WashingMachineWrapper>
  );
};
