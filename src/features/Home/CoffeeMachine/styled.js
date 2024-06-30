import styled from "styled-components";

export const CoffeeMachineWrapper = styled.div`
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translateX(400px);
  z-index: -1;
  transition: opacity 1s;
  opacity: ${({ $show }) => ($show ? 1 : 0)};

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    opacity: 0;
  }
`;
