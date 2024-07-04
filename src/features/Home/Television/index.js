import LazyLoad from "react-lazyload";
import telewizor from "../../../assets/images/serwis-telewizorow.png";
import { Image, TelevisionWrapper } from "./styled";

export const Television = ({ show, center, reset }) => {
  return (
    <TelevisionWrapper $show={show} $center={center} $noDisplay={reset}>
      <LazyLoad>
        <Image
          src={telewizor}
          alt="Serwis telewizorów w Przemyślu"
          $center={center}
        />
      </LazyLoad>
    </TelevisionWrapper>
  );
};
