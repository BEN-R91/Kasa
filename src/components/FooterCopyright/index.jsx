import "./index.css";
import logo from "@/assets/LogoFooter.svg";

export const FooterCopyright = () => {
  return (
    <footer>
      <img src={logo} alt="Kasa"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};