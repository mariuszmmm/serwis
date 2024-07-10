import styled, { css } from "styled-components";

export const DishwasherWrapper = styled.div`
  position: absolute;
  top: 240px;
  left: 50%;
  transform: translateX(300px) translateY(-50px);
  z-index: ${({ $show }) => ($show ? 1 : -1)};;
  transition: opacity 1s ease-in-out;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  ${({ $noDisplay }) =>
    $noDisplay &&
    css`
      display: none;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(120px) translateY(-200px) scale(60%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-10px) translateY(-340px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-60px) translateY(-370px) scale(30%);
      `}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    ${({ $center }) =>
      !$center &&
      css`
        transform: translateX(-100px) translateY(-400px) scale(20%);
      `}
  }

  @media (orientation: portrait) {
    top: clamp(400px, 45vw, 550px);
    transform: translateX(-50%) translateY(170px) scale(50%);

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      transform: translateX(-50%) translateY(-60px) scale(38%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      transform: translateX(-50%) translateY(-10px) scale(35%);
    }
  }
`;

export const Image = styled.img`
  transform: scale(70%);
  filter: drop-shadow(10px 10px 15px rgba(40, 40, 40, 0.7))
    drop-shadow(0px 20px 30px rgba(40, 40, 40, 0.4));

  @media (orientation: portrait) {
    transform: scale(180%);
    max-width: 80vw;
  }
`;
