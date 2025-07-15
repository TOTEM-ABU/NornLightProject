import { navLinks } from "./ContentNavLinks";
import { NavList, NavItem, StyledNavLink } from "../Navbar.styles";

const DesktopNavList = () => (
  <NavList>
    {navLinks.map((link, idx) => (
      <NavItem key={idx}>
        <StyledNavLink to={link.path}>{link.label}</StyledNavLink>
      </NavItem>
    ))}
  </NavList>
);

export default DesktopNavList;
