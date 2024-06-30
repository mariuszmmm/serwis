import pralka from "../../../assets/images/pralka1.png";
import { WashingMachineWrapper } from "./styled";

export const WashingMachine = ({show}) => {
  return (
    <WashingMachineWrapper $show={show}>
      <img src={pralka} alt="pralka" />
    </WashingMachineWrapper>
  );
};
