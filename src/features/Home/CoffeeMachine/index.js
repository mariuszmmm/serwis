import ekspres from "../../../assets/images/ekspres.png";
import { CoffeeMachineWrapper } from "./styled";

export const CoffeeMachine = ({ show, center }) => {
  return (
    <CoffeeMachineWrapper $show={show} $center={center}>
      <img src={ekspres} alt="ekspres do kawy" />
    </CoffeeMachineWrapper>
  );
};
