import React, { useContext, useEffect, useState } from "react";
import { LicoreraContext } from "./LicoreraContext";
import { useParams } from "react-router-dom";
import "../styles/ProductoDetalle.css";

export const ProductoDetalle = () => {
  const obj = useContext(LicoreraContext);
  const [prods] = obj.value.productos;
  const addProducto = obj.value.addProducto;
  const params = useParams();
  const [detalle, setDetalle] = useState([]);
  useEffect(()=>{
    prods.forEach(producto => {
        if(producto.id === params.id){
            setDetalle(producto);
        }
    });
  }, [params.id, prods]);
  return (
    <>
      <div className="detalle">
        <h2>{detalle.nombre}</h2>
        <p className="precio">${detalle.precio}</p>
        <button onClick={() => addProducto(detalle.id)}>Añadir al carrito</button>
        <img src={detalle.image} alt={detalle.nombre}/>
        <div className="descripcion">
            <br/>
            <p><b>Descripcion:</b> {detalle.desc_long}</p>
            <br/>
            <p><b>Empresa:</b> {detalle.empresa}</p>
        </div>
      </div>
    </>
  );
};
