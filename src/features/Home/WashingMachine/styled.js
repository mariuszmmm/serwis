import styled, { css } from "styled-components";

export const WashingMachineWrapper = styled.div`
  position: absolute;
  top: 220px;
  left: 50%;
  transform: translateX(-870px) translateY(-40px);
  z-index: -1;
  transition: opacity 1s ease-in-out;
  opacity: ${({ $show }) => ($show ? 0.8 : 0)};

  ${({ $center }) =>
    $center &&
    css`
      top: clamp(220px, 55vw, 350px);
      transform: translateX(-50%) scale(50%);

      @media (orientation: portrait) {
        top: clamp(400px, 45vw, 550px);
        transform: translateX(-50%) translateY(150px) scale(50%);

        @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
          transform: translateX(-50%) translateY(-60px) scale(40%);
        }

        @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
          transform: translateX(-50%) translateY(-80px) scale(40%);
        }
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-700px) translateY(-140px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-580px) translateY(-250px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-540px) translateY(-340px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-480px) translateY(-390px) scale(20%);
      `}
  }
`;

export const Image = styled.img`
  transform: scale(70%);
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));

  @media (orientation: portrait) {
    ${({ $center }) =>
      $center &&
      css`
        transform: scale(180%);
        max-width: 80vw;
      `};
  }
`;
