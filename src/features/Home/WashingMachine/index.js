import pralka from "../../../assets/images/pralka.png";
import { Image, WashingMachineWrapper } from "./styled";

export const WashingMachine = ({ show, center }) => {
  return (
    <WashingMachineWrapper $show={show} $center={center}>
      <Image src={pralka} alt="pralka" $center={center}/>
    </WashingMachineWrapper>
  );
};
