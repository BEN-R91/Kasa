import "./index.css";
import { useParams } from "react-router-dom";

export const FicheLogement = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Fiche Logement</h1>
      <p>ID: {id}</p>
    </>
  );
};