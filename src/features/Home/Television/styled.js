import styled, { css } from "styled-components";

export const TelevisionWrapper = styled.div`
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translateX(-1280px);
  z-index: -1;
  transition: opacity 1s;
  opacity: ${({ $show }) => ($show ? 0.8 : 0)};

  ${({ $center }) =>
    $center &&
    css`
      top: 480px;
      transform: translateX(-50%) scale(50%);
    `}
`;

export const Image = styled.img`
  scale: 100%;
`;
