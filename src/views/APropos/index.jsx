import "./index.css";
import { Banner } from "@/components/Banner/index.jsx";
import { Collapse } from "@/components/Collapse/index.jsx";
import bannerAbout from "@/assets/BannerAbout.svg";

export const APropos = () => {
  return (
    <>
      <Banner src={bannerAbout} />

      <section>
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale.
            Les photos sont conformes aux logements, et toutes les informations
            sont régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou perturbateur entraînera
            une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Nos équipes sont à votre écoute pour vous fournir une expérience
            parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement respecte les critères de sécurité
            établis par nos services.
          </p>
        </Collapse>
      </section>
    </>
  );
};