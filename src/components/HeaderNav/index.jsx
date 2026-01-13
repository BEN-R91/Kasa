import "./index.css";
import { Link } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <nav>
      <menu>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/a-propos">À propos</Link></li>
      </menu>
    </nav>
  );
};