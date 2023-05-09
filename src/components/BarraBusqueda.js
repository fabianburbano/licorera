import React, { useContext, useState } from "react";
import { LicoreraContext } from "./LicoreraContext";
import "../styles/BarraBusqueda.css";

export const BarraBusqueda = () => {
  const obj = useContext(LicoreraContext);
  const [
    productosFiltrados,
    setProductosFiltrados,
  ] = obj.value.productosFiltrados;
  const [productos] = obj.value.productos;
  const [busqueda, setBusqueda] = useState("");
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = productos.filter((prod) => {
      if (
        prod.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        prod.desc_short
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        prod.desc_long
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return prod;
      }
    });
    setProductosFiltrados(resultadosBusqueda);
  };
  return (
    <div className="containerInput">
      <input
        className="inputBuscar"
        value={busqueda}
        placeholder="Búsqueda producto por nombre o descripción"
        onChange={handleChange}
      />
    </div>
  );
};
