import "./index.css";

import { Banner } from "@/components/Banner/index.jsx";
import { CardHome } from "@/components/CardHome/index.jsx";

import homeBanner from "@/assets/BannerHome.svg";
import logements from "@/data/logements.json";

export const Home = () => {
  return (
    <>
      <Banner
        src={homeBanner}
        title="Chez vous, partout et ailleurs"
      />

      <section className="cards-home">
        {logements.slice(0, 6).map((logement) => (
          <CardHome key={logement.id}
                    id={logement.id} 
                    title={logement.title} 
                    cover={logement.cover} /> 
        ))}
      </section>  
    </>
  );
};

