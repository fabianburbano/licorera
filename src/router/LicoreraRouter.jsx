import React from "react";
import { Route, Routes } from "react-router-dom";
import { Inicio } from "../components/Inicio";
import { ListaProducto } from "../components/ListaProducto";
import { ProductoDetalle } from "../components/ProductoDetalle";
import { PaginaNoExiste } from "../components/PaginaNoExiste";
import { DejanosMensaje } from "../components/DejanosMensaje";

export const LicoreraRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Inicio />} />
      <Route exact path="/productos/" element={<ListaProducto />} />
      <Route exact path="/producto/:id" element={<ProductoDetalle />} />
      <Route exact path="/dejanosMensaje/" element={<DejanosMensaje />} />
      <Route path="*" element={<PaginaNoExiste />} />
    </Routes>
  );
};
