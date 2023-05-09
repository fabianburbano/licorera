import React, { useContext } from "react";
import { LicoreraContext } from "./LicoreraContext";
import { Link } from "react-router-dom";

export const Producto = ({id,nombre,empresa,desc_short,desc_long,image,precio}) => {
  const obj = useContext(LicoreraContext);
  const addProducto = obj.value.addProducto;
  return (
    <div className="producto">
      <Link to={`/producto/${id}`}>
        <div className="producto_imagen">
          <img src={image} alt={desc_short} />
        </div>
      </Link>
      <div className="producto_footer">
        <h1>{nombre}</h1>
        <p>{desc_short}</p>
        <p className="precio">${precio}</p>
      </div>
      <div className="buttom">
        <button className="btn" onClick={() => addProducto(id)}>Añadir al carrito</button>
        <div>
          <Link to={`/producto/${id}`} className="btn">
            Vista
          </Link>
        </div>
      </div>
    </div>
  );
};
