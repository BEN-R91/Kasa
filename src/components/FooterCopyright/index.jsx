import "./index.css";
import logo from "@/assets/LogoFooter.svg";

export const FooterCopyright = () => {
  return (
    <footer>
      <img src={logo} alt="Kasa"/>
      <p><span>© 2020 Kasa.</span><span>All rights reserved</span></p>
    </footer>
  );
};