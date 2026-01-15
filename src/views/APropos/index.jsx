import "./index.css";
import { Banner } from "@/components/Banner/index.jsx";
import bannerAbout from "@/assets/BannerAbout.svg";

export const APropos = () => {
  return (
    <figure>
      <Banner src={bannerAbout} alt="Bannière de la page À propos"/>
    </figure>
  );
};