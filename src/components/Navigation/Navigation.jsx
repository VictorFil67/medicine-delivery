import { NavLink, Outlet } from "react-router-dom";
import s from "./Navigation.module.css";
import SvgLogo from "../SVG/logo";

export const Navigation = () => {
  return (
    <div>
      <header>
        <nav className={s.nav}>
          <NavLink to="/">
            <SvgLogo />
          </NavLink>
          <NavLink className={s.link} to="/">
            Shop
          </NavLink>
          <p className={s.delimeter}>|</p>
          <NavLink className={s.link} to="/shopping_cart">
            Shopping Cart
          </NavLink>
          {/* <NavLink className={s.link} to="/favorites">
            Favorites
          </NavLink> */}
        </nav>
        {/* <hr /> */}
      </header>
      <Outlet />
    </div>
  );
};
