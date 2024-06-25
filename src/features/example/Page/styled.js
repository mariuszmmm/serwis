import styled, { css } from "styled-components";

export const Header = styled.h1`
  color: red;

  ${({ $isEven }) =>
    $isEven &&
    css`
      color: blue;
    `}
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 700;
`;
