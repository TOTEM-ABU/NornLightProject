import { navLinks } from "./ContentNavLinks";
import { MobileNavList, MobileNavItem, StyledNavLink } from "./Navbar.styles";

const MobileNav = () => (
  <MobileNavList>
    {navLinks.map((link, idx) => (
      <MobileNavItem key={idx}>
        <StyledNavLink to={link.path}>{link.label}</StyledNavLink>
      </MobileNavItem>
    ))}
  </MobileNavList>
);

export default MobileNav;
