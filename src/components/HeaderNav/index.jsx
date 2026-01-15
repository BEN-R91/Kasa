import "./index.css";
import { NavLink } from "react-router-dom";
import logo from "@/assets/LogoHeader.svg";

export const HeaderNav = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="" />
        <menu>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/a-propos">À propos</NavLink></li>
        </menu>
      </nav>
    </header>
  );
};