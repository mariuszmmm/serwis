import ekspres from "../../../assets/images/ekspres.png";
import { CoffeeMachineWrapper } from "./styled";

export const CoffeeMachine = ({ show }) => {
  return (
    <CoffeeMachineWrapper $show={show}>
      <img src={ekspres} alt="ekspres do kawy" />
    </CoffeeMachineWrapper>
  );
};
