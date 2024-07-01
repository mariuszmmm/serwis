import styled, { css } from "styled-components";

export const CoffeeMachineWrapper = styled.div`
  position: absolute;
  top: 310px;
  left: 50%;
  transform: translateX(380px);
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
