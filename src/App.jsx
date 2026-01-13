import "./App.css";
import { AppRouter } from "@/router";
import { HeaderNav } from "@/components/HeaderNav/index.jsx";
import { FooterCopyright } from "@/components/FooterCopyright/index.jsx";

export const App = () => {
  return (
    <>
      <HeaderNav />

      <main>
        <AppRouter />
      </main>

      <FooterCopyright />
    </>
  );
};

