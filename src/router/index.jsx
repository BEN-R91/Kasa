import { Routes, Route } from "react-router-dom";

import { Home } from "@/views/Home";
import { FicheLogement } from "@/views/FicheLogement";
import { APropos } from "@/views/APropos";
import { D404 } from "@/views/D404";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/fiche-logement/:id" element={<FicheLogement />} />
      <Route path="/a-propos" element={<APropos />} />
      <Route path="*" element={<D404 />} />
    </Routes>
  );
}