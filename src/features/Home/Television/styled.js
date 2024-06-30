import styled from "styled-components";

export const TelevisionWrapper = styled.div`
  position: absolute;
  top: 370px;
  left: 50%;
  transform: translateX(-1150px);
  z-index: -1;
  transition: opacity 1s;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  
  @media (max-width: ${({ theme }) => theme.breakpoint.big}) {
    opacity: 0;
  }
`;

export const Image = styled.img`
  scale: 80%;
`;
