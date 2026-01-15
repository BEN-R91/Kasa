import "./index.css";
import { Banner } from "@/components/Banner/index.jsx";
import bannerAbout from "@/assets/BannerAbout.svg";

export const APropos = () => {
  return (
    <Banner src={bannerAbout}/>
  );
};