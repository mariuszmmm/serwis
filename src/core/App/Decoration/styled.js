import styled from "styled-components";

export const DecorationContainer = styled.div`
  position: fixed;
  z-index: -1;
  opacity: 0.8;
  filter: blur(200px);
  min-width: 100%;
  min-height: 100%;
`;

export const Image = styled.img`
  transform: scale(250%);
  animation: rotateBackground 90s linear infinite;

  @keyframes rotateBackground {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
