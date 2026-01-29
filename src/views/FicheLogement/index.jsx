import "./index.css";

import { useParams } from "react-router-dom";
import logements from "@/data/logements.json";
import { Carrousel } from "@/components/Carrousel";

export const FicheLogement = () => {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  return (
    <section className="fiche-logement">
      <Carrousel logement={logement} />

      <hgroup>
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
      </hgroup>

      <ul>
        {logement.tags.map((tag) => (
        <li key={tag}>{tag}</li>
        ))}
      </ul>
    </section>
  );
};



