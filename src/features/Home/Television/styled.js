import styled, { css } from "styled-components";

export const TelevisionWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-1100px);
  z-index: -1;
  transition: opacity 1s;
  opacity: ${({ $show }) => ($show ? 0.8 : 0)};

  ${({ $center }) =>
    $center &&
    css`
      top: clamp(220px, 55vw, 350px);
      transform: translateX(-50%) scale(50%);

      @media (orientation: portrait) {
        top: clamp(450px, 45vw, 550px);
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-980px);
      `}
  }
`;

export const Image = styled.img`
  transform: scale(60%);
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));

  @media (orientation: portrait) {
    ${({ $center }) =>
      $center &&
      css`
        transform: scale(150%);
        max-width: 100vw;
      `};
  }
`;
