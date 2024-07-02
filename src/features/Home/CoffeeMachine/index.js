import ekspres from "../../../assets/images/ekspres.png";
import { CoffeeMachineWrapper, Image } from "./styled";

export const CoffeeMachine = ({ show, center, reset }) => {
  return (
    <CoffeeMachineWrapper $show={show} $center={center} $noDisplay={reset}>
      <Image src={ekspres} alt="ekspres do kawy" $center={center} />
    </CoffeeMachineWrapper>
  );
};
