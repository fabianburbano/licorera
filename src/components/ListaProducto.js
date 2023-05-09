import React, { useContext } from "react";
import "../styles/ListaProducto.css";
import { BarraBusqueda } from "./BarraBusqueda";
import { LicoreraContext } from "./LicoreraContext";
import { Producto } from "./Producto";

export const ListaProducto = () => {
  const obj = useContext(LicoreraContext);
  const [productosFiltrados] = obj.value.productosFiltrados;
  return (
    <>
      <div className="titleProds">
        <h1 className="title">PRODUCTO</h1>
        <BarraBusqueda />
      </div>
      <div className="productos">
        {productosFiltrados &&
          productosFiltrados.map((prod) => (
            <Producto
              key={prod.id}
              id={prod.id}
              nombre={prod.nombre}
              empresa={prod.empresa}
              desc_short={prod.desc_short}
              desc_long={prod.desc_long}
              image={prod.image}
              precio={prod.precio}
            />
          ))}
      </div>
    </>
  );
};
