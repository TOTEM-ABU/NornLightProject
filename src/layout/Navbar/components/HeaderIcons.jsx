import { NavLink } from "react-router";
import SignalBarsIcon from "../icons/SignalBarsIcon";
import { HeaderMenyuIconWrapp } from "../Navbar.styles";

const HeaderIcons = () => (
  <>
    <HeaderMenyuIconWrapp as={NavLink} to={'/favourites'}>
      <i className="fa-regular fa-heart"></i>
      <span>Избранное</span>
    </HeaderMenyuIconWrapp>
    <HeaderMenyuIconWrapp>
      <SignalBarsIcon />
      <span style={{marginTop:"4px"}}>Сравнение</span>
    </HeaderMenyuIconWrapp>
    <HeaderMenyuIconWrapp as={NavLink} to={'/basket'}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span>Корзина</span>
    </HeaderMenyuIconWrapp>
  </>
);

export default HeaderIcons;
