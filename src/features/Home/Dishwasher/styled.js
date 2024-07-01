import styled, { css } from "styled-components";

export const DishwasherWrapper = styled.div`
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(410px);
  z-index: -1;
  transition: opacity 1s;
  opacity: ${({ $show }) => ($show ? 0.8 : 0)};

  ${({ $center }) =>
    $center &&
    css`
      top: 500px;
      transform: translateX(-50%) scale(50%);
    `}
`;
