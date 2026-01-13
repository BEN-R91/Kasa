import "./index.css";
import logo from "@/assets/LOGO.svg";

export const FooterCopyright = () => {
  return (
    <footer>
      <img src={logo} alt="Kasa"/>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};