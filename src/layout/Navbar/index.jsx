import { useEffect, useState } from "react";
import Button from "../../components/Button";
import BarsIcon from "./icons/BarsIcon";
import {
  Header,
  Container,
  HeaderContainer,
  HeaderAbout,
  HeaderMenyuDiv,
  HeaderMenyuChild1,
  HeaderSearchDiv,
  HeaderMenyuChild2,
  HeaderMobileScreenSearchDiv,
  HeaderMobileScrollNavbarDiv,
  HeaderMobileScrollNavbarGlobal,
  HeaderMobileScrollNavbarMenyu,
  HeaderMobileScrollNavbarChild2,
  HeaderMobileScrollNavbarListDiv,
  HeaderMobileScrollNavbarChildDiv,
  CloseIcon,
  PhoneLink,
  CallOrderButton,
  SearchInput,
  SearchIcon,
  StyledNavLink,
  AboutDiv,
  MobileNavList,
  MobileNavItem,
} from "./Navbar.styles";
import CallModal from "./components/CallModal";
import DesktopNavList from "./components/NavLinks";
import HeaderIcons from "./components/HeaderIcons";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isScrollNavbarOpen, setIsScrollNavbarOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  function toggleScrollNavbar() {
    setIsScrollNavbarOpen(true);
  }

  function closeScrollNavbar() {
    setIsScrollNavbarOpen(false);
  }

  function openCallModal() {
    setIsCallModalOpen(true);
  }

  function closeCallModal() {
    setIsCallModalOpen(false);
  }

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.getElementById("navbar");

      if (!navbar) return;

      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = "0px";
      } else {
        navbar.style.top = "-200px";
      }

      prevScrollpos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <CallModal isOpen={isCallModalOpen} onClose={closeCallModal} />

      <Header id="navbar">
        <Container>
          <HeaderContainer>
            <HeaderAbout>
              <DesktopNavList />
              <AboutDiv>
                <PhoneLink href="tel:+8 890-46-56">8 (800) 890-46-56</PhoneLink>
                <CallOrderButton onClick={openCallModal}>
                  Заказать звонок
                </CallOrderButton>
              </AboutDiv>
            </HeaderAbout>

            <HeaderMenyuDiv>
              <HeaderMenyuChild1>
                <button onClick={toggleScrollNavbar}>
                  <BarsIcon />
                </button>
                <NavLink to={'/'}>
                  <img src="header-icon.svg" alt="icon" />
                </NavLink>
                <Button type="btnN" />
              </HeaderMenyuChild1>

              <HeaderSearchDiv>
                <SearchInput type="search" placeholder="Поиск по товарам" />
                <SearchIcon className="fa-solid fa-magnifying-glass" />
              </HeaderSearchDiv>

              <HeaderMenyuChild2>
                <HeaderIcons />
              </HeaderMenyuChild2>
            </HeaderMenyuDiv>

            <HeaderMobileScreenSearchDiv>
              <HeaderSearchDiv>
                <SearchInput type="search" placeholder="Поиск по товарам" />
                <SearchIcon className="fa-solid fa-magnifying-glass" />
              </HeaderSearchDiv>
            </HeaderMobileScreenSearchDiv>

            <HeaderMobileScrollNavbarDiv $isActive={isScrollNavbarOpen}>
              <HeaderMobileScrollNavbarGlobal $isActive={isScrollNavbarOpen}>
                <HeaderMobileScrollNavbarMenyu>
                  <CloseIcon
                    className="fa-solid fa-xmark"
                    onClick={closeScrollNavbar}
                  />
                  <HeaderMobileScrollNavbarChild2>
                    <HeaderIcons />
                  </HeaderMobileScrollNavbarChild2>
                </HeaderMobileScrollNavbarMenyu>

                <HeaderMobileScrollNavbarListDiv>
                  <MobileNavList>
                    <MobileNavItem>
                      <StyledNavLink to="/about">О компании</StyledNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                      <StyledNavLink to="/shipping">
                        Доставка и оплата
                      </StyledNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                      <StyledNavLink to="/return">Возврат</StyledNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                      <StyledNavLink to="/garant">Гарантии</StyledNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                      <StyledNavLink to="/">Контакты</StyledNavLink>
                    </MobileNavItem>
                    <MobileNavItem>
                      <StyledNavLink to="/">Блог</StyledNavLink>
                    </MobileNavItem>
                  </MobileNavList>
                  <HeaderMobileScrollNavbarChildDiv>
                    <Button type="btnN" />
                    <PhoneLink href="tel:+8 890-46-56">
                      8 (800) 890-46-56
                    </PhoneLink>
                    <CallOrderButton onClick={openCallModal}>
                      Заказать звонок
                    </CallOrderButton>
                  </HeaderMobileScrollNavbarChildDiv>
                </HeaderMobileScrollNavbarListDiv>
              </HeaderMobileScrollNavbarGlobal>
            </HeaderMobileScrollNavbarDiv>
          </HeaderContainer>
        </Container>
      </Header>
    </>
  );
};

export default Navbar;
