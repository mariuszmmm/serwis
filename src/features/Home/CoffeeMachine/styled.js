import styled, { css } from "styled-components";

export const CoffeeMachineWrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(240px) translateY(-50px);
  z-index: -1;
  transition: opacity 1s ease-in-out;
  opacity: ${({ $show }) => ($show ? 0.8 : 0)};
  ${({ $noDisplay }) =>
    $noDisplay &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(50px) translateY(-200px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-80px) translateY(-330px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-120px) translateY(-360px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-180px) translateY(-390px) scale(20%);
      `}
  }

  ${({ $center }) =>
    $center &&
    css`
      top: clamp(220px, 55vw, 350px);
      transform: translateX(-50%) scale(50%);

      @media (orientation: portrait) {
        top: clamp(380px, 40vw, 550px);
        transform: translateX(-50%) translateY(150px) scale(50%);

        @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
          transform: translateX(-50%) translateY(-70px) scale(40%);
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
          transform: translateX(-50%) translateY(-80px) scale(40%);
        }
      }
    `}
`;

export const Image = styled.img`
  transform: scale(70%);
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
