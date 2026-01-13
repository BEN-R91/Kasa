import "./index.css";
import { Banner } from "@/components/Banner/index.jsx";
import homeBanner from "@/assets/BannerHome.svg";

export const Home = () => {
  return (
    <section>
      <Banner src={homeBanner} alt="Bannière accueil" />
      <p>Chez vous, partout et ailleurs</p>
    </section>
  );
};
