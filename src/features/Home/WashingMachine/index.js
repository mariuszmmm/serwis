import pralka from "../../../assets/images/pralka.png";
import { WashingMachineWrapper } from "./styled";

export const WashingMachine = ({ show ,center }) => {
  return (
    <WashingMachineWrapper $show={show} $center={center}>
      <img src={pralka} alt="pralka" />
    </WashingMachineWrapper>
  );
};
