import styled from "styled-components";

export const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Rotating = styled.div`
  @keyframes rotateBg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotateBg 60s linear infinite;
  opacity: 0.8;
  background-color: transparent;
  z-index: -1;
`;

export const Circle = styled.div`
  @keyframes moveCircle {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(10vw, 0) rotate(90deg);
    }
    50% {
      transform: translate(10vw, 10vh) rotate(180deg);
    }
    75% {
      transform: translate(0, 100vh) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) rotate(360deg);
    }
  }

  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 60vw;
  height: 60vw;
  background: radial-gradient(
    circle,
    rgba(235, 92, 32, 0.5) 0%,
    rgba(235, 92, 32, 0) 70%
  );
  border-radius: 50%;
  filter: blur(10px);
  animation: moveCircle 60s infinite;
  z-index: -1;
`;
