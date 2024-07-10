import LazyLoad from "react-lazyload";
import telewizor from "../../../assets/images/serwis-telewizorow.png";
import { Image, TelevisionWrapper } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const Television = ({ show, center, reset }) => {
  return (
    <TelevisionWrapper $show={show} $center={center} $noDisplay={reset}>
      <LazyLoad>
        <Link smooth to="/uslugi#naprawa-telewizorów">
          <Image
            src={telewizor}
            alt="Serwis telewizorów w Przemyślu"
            $center={center}
          />
        </Link>
      </LazyLoad>
    </TelevisionWrapper>
  );
};
