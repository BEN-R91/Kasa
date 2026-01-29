import { Routes, Route } from "react-router-dom";

import { Home } from "@/views/Home";
import { APropos } from "@/views/APropos";
import { D404 } from "@/views/D404";
import { FicheLogement } from "@/views/FicheLogement";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="/logement/:id" element={<FicheLogement />} />
      <Route path="*" element={<D404 />} />
    </Routes>
  );
}

// BrowserRouter : active la navigation “SPA”

// Routes : choisit la route qui correspond à l’URL

// Route path=... element=... : règle URL → composant

// Link to=... : change l’URL sans reload

// * : page 404