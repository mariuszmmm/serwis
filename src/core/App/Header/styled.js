import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.white};
  padding: 10px 0;
  position: fixed;
  width: 100%;
  top: 0;
  /* height: 50px; */
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 20px;
  /* height: 100%; */

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 10px;
  }
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    margin: 0 2px;
    font-size: clamp(0.3rem, 1.6vw, 0.9rem);

    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      margin: 0 1px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
      margin: 0;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  padding: 8px 10px;
  transition: all 0.3s ease;
  display: flex;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 4px;
  }

  &.active,
  &:hover {
    background-color: ${({ theme }) => theme.color.emperor};
  }
`;
