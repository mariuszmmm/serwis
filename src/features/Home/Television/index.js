import telewizor from "../../../assets/images/telewizor.png";
import { Image, TelevisionWrapper } from "./styled";

export const Television = ({ show, center, reset }) => {
  return (
    <TelevisionWrapper $show={show} $center={center} $noDisplay={reset}>
      <Image src={telewizor} alt="telewizor" $center={center} />
    </TelevisionWrapper>
  );
};
