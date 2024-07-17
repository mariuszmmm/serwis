import { BackgroundWrapper, Circle, Image, Rotating } from "./styled.js";
// import serwis from "../../../assets/images/serwis.jpg";

export const Background = () => {
  return (
    <BackgroundWrapper>
      {/* <Image src={serwis} alt="Background image" loading="lazy" /> */}
      <Rotating>
        <Circle $top={"0"} $left={"0"}></Circle>
        <Circle $top={"-80%"} $left={"30%"}></Circle>
        <Circle $top={"-20%"} $left={"70%"}></Circle>
      </Rotating>
    </BackgroundWrapper>
  );
};
