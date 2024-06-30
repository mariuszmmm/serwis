import telewizor from "../../../assets/images/telewizor.png";
import { Image, TelevisionWrapper } from "./styled";

export const Television = ({ show }) => {
  return (
    <TelevisionWrapper $show={show}>
      <Image src={telewizor} alt="telewizor" />
    </TelevisionWrapper>
  );
};
