import "./index.css";
import { Link } from "react-router-dom";

export const D404 = () => {
  return (
    <>
      <h1>404</h1>
      <p>Page introuvable</p>
      <Link to="/">Retour à l’accueil</Link>
    </>
  );
}