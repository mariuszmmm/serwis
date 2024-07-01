import decoration from "../../../assets/images/decoration.png";
import { DecorationContainer, Image } from "./styled";

export const Decoration = () => {
  return (
    <DecorationContainer>
      <Image src={decoration} alt="" />
    </DecorationContainer>
  );
};
