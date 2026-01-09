import "./App.css";
import { Link } from "react-router-dom";
import { AppRouter } from "@/router";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/a-propos">À propos</Link></li>
          <li><Link to="/fiche-logement/123">Fiche logement</Link></li>
        </ul>
      </nav>

      <AppRouter />
    </>
  );
};

export default App