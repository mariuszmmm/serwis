import telewizor from "../../../assets/images/telewizor.png";
import { Image, TelevisionWrapper } from "./styled";

export const Television = ({ show, center }) => {
  return (
    <TelevisionWrapper $show={show} $center={center}>
      <Image src={telewizor} alt="telewizor" $center={center} />
    </TelevisionWrapper>
  );
};
