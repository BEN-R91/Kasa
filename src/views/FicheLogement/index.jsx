import "./index.css";

import { useParams } from "react-router-dom";
import logements from "@/data/logements.json";
import { Carrousel } from "@/components/Carrousel";
import { Collapse } from "@/components/Collapse";

export const FicheLogement = () => {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  const rating = parseInt(logement.rating);

  return (
    <section className="fiche-logement">
      <Carrousel logement={logement} />

      <header>
        <div>
          <hgroup>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
          </hgroup>

          <aside>
            <p>{logement.host.name}</p>
            <img
              src={logement.host.picture}
              alt=""
            />
          </aside>
        </div>

        <div>
          <ul>
            {logement.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className="rating" aria-label={`Note de ${rating} sur 5`}>
            {[1, 2, 3, 4, 5].map((star) => ( //pour chaque nombre de 1 à 5 on crée une étoile, on pourra ensuite comparer star au rating puisque c' est un Number et appliquer la class corréspondante 
              <span
                key={star}
                className={star <= rating ? "star star--full" : "star"}
                aria-hidden="true"
              >
                  ★
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="fiche-logement-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq) => (<li key={eq}>{eq}</li>))} 
          </ul>
        </Collapse>
      </div>
    </section>
  );
};




