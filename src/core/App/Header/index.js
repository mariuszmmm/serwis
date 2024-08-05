import {
  HeaderContainer,
  HeaderWrapper,
  Logo,
  Nav,
  StyledNavLink,
} from "./styled";
import { serwis } from "../../../utils/serwis";
import { StyledLink } from "../../../common/Buttons";
import { useEffect, useState } from "react";
export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">Serwis RTV i&nbsp;AGD</Logo>
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
        <StyledLink href={serwis.url.addTestimonial} $opinia $hidden={scrolled}>
          Wystaw opinię
        </StyledLink>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
