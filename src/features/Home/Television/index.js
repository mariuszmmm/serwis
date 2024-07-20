import telewizor from "../../../assets/images/serwis-telewizorow.webp";
import { Image, TelevisionWrapper } from "./styled";
import { HashLink as Link } from "react-router-hash-link";
export const Television = ({ show, center, reset, setHold }) => {
  return (
    <TelevisionWrapper
      $show={show}
      $center={center}
      $noDisplay={reset}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
    >
      <Link to="/uslugi#naprawa-telewizorów">
        <Image
          src={telewizor}
          alt="Serwis telewizorów w Przemyślu"
          $center={center}
        />
      </Link>
    </TelevisionWrapper>
  );
};
