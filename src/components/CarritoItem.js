import React, { useContext } from "react";
import { LicoreraContext } from "./LicoreraContext";

export const CarritoItem = ({ id, nombre, image, precio, cantidad }) => {
  const obj = useContext(LicoreraContext);
  const [carrito, setCarrito] = obj.value.carrito;
  const removeProducto = (id) => {
    if (window.confirm("Desea eliminar el item?")) {
      carrito.forEach((item, index) => {
        if (item.id === id) {
          carrito.splice(index, 1);
        }
      });
      setCarrito([...carrito]);
      if (carrito.length === 0) {
        localStorage.setItem("dataCarrito", JSON.stringify(carrito));
      }
    }
  };
  const restaProducto = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
    });
    setCarrito([...carrito]);
  };
  const sumaProducto = (id) => {
    carrito.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
    });
    setCarrito([...carrito]);
  };
  return (
    <div className="carrito_item" key={id}>
      <img src={image} alt="carrito" />
      <div>
        <h3>{nombre}</h3>
        <p className="precio">${precio}</p>
      </div>
      <div>
        <box-icon
          name="up-arrow"
          type="solid"
          onClick={() => sumaProducto(id)}
        ></box-icon>
        <p className="cantidad">{cantidad}</p>
        <box-icon
          name="down-arrow"
          type="solid"
          onClick={() => restaProducto(id)}
        ></box-icon>
      </div>
      <div className="remove_item">
        <box-icon
          name="trash"
          type="solid"
          onClick={() => removeProducto(id)}
        ></box-icon>
      </div>
    </div>
  );
};
