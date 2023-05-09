import React, { useContext } from "react";
import "../styles/Carrito.css";
import { LicoreraContext } from "./LicoreraContext";
import { CarritoItem } from "./CarritoItem";

export const Carrito = () => {
  const obj = useContext(LicoreraContext);
  const menu = obj.value.menu;
  const [carrito] = obj.value.carrito;
  const [total] = obj.value.total;
  const estiloLista = menu ? "lista_carrito show" : "lista_carrito";
  const estiloCarrito = menu ? "carrito show" : "carrito";
  return (
    <div className={estiloLista}>
      <div className={estiloCarrito}>
        <div className="carrito_close">
          <box-icon name="x" onClick={obj.value.toogle}></box-icon>
        </div>
        <h2>Su carrito</h2>
        <div className="carrito_center">
          {carrito.length === 0 ? (
            <h3>Carrito vacio</h3>
          ) : (
            carrito.map((item) => (
              <CarritoItem
                key={item.id}
                id={item.id}
                nombre={item.nombre}
                image={item.image}
                precio={item.precio}
                cantidad={item.cantidad}
              />
            ))
          )}
        </div>
        <div className="carrito_footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
};
