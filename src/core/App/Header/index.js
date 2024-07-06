import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Nav,
  StyledNavLink,
} from "./styled";
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
              <StyledNavLink to="/o-mnie">O mnie</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/uslugi">Usługi</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cennik">Cennik</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/opinie">Opinie</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/kontakt">Kontakt</StyledNavLink>
            </li>
          </ul>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
