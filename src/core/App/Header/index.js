import { HeaderContainer, HeaderWrapper, Logo, Nav, StyledNavLink } from "./styled";
import { serwis } from "../../../utils/serwis";
export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="">{serwis.name}</Logo>
        <Nav>
          <ul>
            <li>
              <StyledNavLink to="/">Strona Główna</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/about">O mnie</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/services">Usługi</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/pricing">Cennik</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/testimonials">Opinie</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact">Kontakt</StyledNavLink>
            </li>
          </ul>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
