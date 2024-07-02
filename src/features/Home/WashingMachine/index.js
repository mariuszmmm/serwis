import pralka from "../../../assets/images/pralka.png";
import { Image, WashingMachineWrapper } from "./styled";

export const WashingMachine = ({ show, center, reset }) => {
  return (
    <WashingMachineWrapper $show={show} $center={center} $noDisplay={reset}>
      <Image src={pralka} alt="pralka" $center={center} />
    </WashingMachineWrapper>
  );
};
