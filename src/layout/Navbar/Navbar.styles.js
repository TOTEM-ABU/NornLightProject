import styled from "styled-components"
import { NavLink } from "react-router-dom"

// Call Modal Components
export const CallParrent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => (props.$isActive ? "2000" : "-2000")};
  transition: 0.3s visibility;
  visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};
`

export const CallGlobal = styled.div`
  position: absolute;
  top: ${(props) => (props.$isActive ? "20%" : "15%")};
  opacity: ${(props) => (props.$isActive ? "1" : "0.7")};
  left: 25%;
  width: 50%;
  height: 500px;
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 90%;
    left: 5%;
    top: ${(props) => (props.$isActive ? "15%" : "10%")};
    height: auto;
    padding: 20px;
  }
`

export const CloseIcon = styled.i`
  color: #e5e5e5;
  margin-bottom: 20px;
  text-align: end;
  font-size: 20px;
  cursor: pointer;
  align-self: flex-end;
`

export const CallTitle = styled.h1`
  color: #454545;
  font-weight: 700;
  font-size: 64px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const CallInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #454545;
  color: #454545;
  border-radius: 24px;
  font-size: 16px;

  &::placeholder {
    color: #454545;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const CallButton = styled.button`
  background-color: #454545;
  width: 100%;
  border-radius: 24px;
  padding: 9px 0px;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`

// Header Components
export const Header = styled.header`
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s ease;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeaderAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e5e5e5;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
`

export const NavItem = styled.li``

export const StyledNavLink = styled(NavLink)` // Better as={NavLink}
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`

export const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const PhoneLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;

  @media (max-width: 768px) {
    color: #666;
    font-size: 14px;
    text-align: center;
  }
`

export const CallOrderButton = styled.button`
  background: transparent;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: #f5f5f5;
  }

  @media (max-width: 768px) {
    color: #66666670;
    background: none;
    border: none;
  }
`

export const HeaderMenyuDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  gap: 20px;
`

export const HeaderMenyuChild1 = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    height: 40px;

    @media (max-width: 480px) {
      height: 35px;
    }
  }

  button:nth-child(1) {
    border: none;
    background: none;
    padding: 3px;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .HeaderComponentButton {
    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`

export const HeaderSearchDiv = styled.div`
  flex: 1;
  max-width: 500px;
  position: relative;

  @media (max-width: 768px) {
    display: none;
    max-width: 100%;

    &.mobile-search {
      display: block;
    }
  }
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 50px 12px 20px;
  border: 1px solid #ddd;
  border-radius: 25px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #333;
  }
`

export const SearchIcon = styled.i`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  cursor: pointer;
`

export const HeaderMenyuChild2 = styled.div`
  display: flex;
  gap: 25px;

  @media (max-width: 768px) {
    gap: 20px;

    span {
      display: none;
    }

    .header-menyu-child-2-icon {
      display: none;
    }
    div:nth-child(2) {
      display: none;
    }
  }
`

export const HeaderMenyuIconWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }

  i {
    font-size: 20px;
    margin-bottom: 5px;
    color: #666;
  }

  span {
    font-size: 12px;
    color: #666;
  }

`

export const HeaderMobileScreenSearchDiv = styled.div`
  display: none;
  padding: 10px 0;
  width: 100%;
  z-index: -1;

  @media (max-width: 768px) {
    display: block;

    ${HeaderSearchDiv} {
      display: block;
      max-width: 100%;
    }
  }
`

export const HeaderMobileScrollNavbarDiv = styled.div`
  visibility: ${(props) => (props.$isActive ? "visible" : "hidden")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: ${(props) => (props.$isActive ? "2000" : "-2000")};
  transition: 0.3s visibility;
`

export const HeaderMobileScrollNavbarGlobal = styled.div`
  position: absolute;
  top: ${(props) => (props.$isActive ? "0%" : "-20%")};
  left: 0;
  background: white;
  width: 100%;
  height: ${(props) => (props.$isActive ? "85%" : "0%")};
  padding: 20px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s;
`

export const HeaderMobileScrollNavbarMenyu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;

  span {
    display: none;
  }

  i {
    font-size: 24px;
    cursor: pointer;
  }
`

export const HeaderMobileScrollNavbarChild2 = styled.div`
  display: flex;
  gap: 20px;
`

export const HeaderMobileScrollNavbarListDiv = styled.div`
  width: 100%;
`

export const MobileNavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #45454520;
  margin: 10px 0px 20px 0px;
  width: 100%;
  padding: 0;
`

export const MobileNavItem = styled.li`
  padding: 10px 0px;
  border-bottom: 1px solid #45454520;
  width: 100%;
  text-align: center;
`

export const HeaderMobileScrollNavbarChildDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

  a {
    color: #666;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
    text-align: center;
  }

  button:nth-child(3) {
    color: #66666670;
    background: none;
    border: none;
  }
`

// Signal Bars Component
export const SignalBars = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 5px;
  gap: 2px;
  height: 20px;
  width: 20px;
  justify-content: center;
`

export const SignalBar = styled.div`
  background-color: #666;
  width: 3px;
  border-radius: 1px;
  transition: background-color 0.3s ease;

  &:nth-child(1) {
    height: 6px;
  }

  &:nth-child(2) {
    height: 12px;
  }

  &:nth-child(3) {
    height: 18px;
  }
`
