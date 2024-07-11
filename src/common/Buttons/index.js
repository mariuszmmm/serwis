import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.color.white};
  padding: 15px 30px;
  font-size: clamp(0.7rem, 2vw, 2rem);
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 700;
  min-width: max-content;

  &:hover {
    background-color: ${({ theme }) => theme.color.buttonHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 10px 15px;
    margin: 0 5px;
    border-radius: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 10px;
  }
`;

export const Button = styled.a`
  ${buttonStyles}
  ${({ $opinia }) =>
    $opinia &&
    css`
      position: absolute;
      bottom: 0;
      right: 31px;
      padding: 8px 15px;
      transform: translate(0, calc(100% + 20px));
      font-size: clamp(0.3rem, 1.6vw, 0.9rem);
      font-weight: 400;

      @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
        right: 13px;
        margin: 0;
        padding: 5px 10px;
      }
    `}
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
`;
