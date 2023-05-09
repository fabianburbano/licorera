import React, { useContext } from "react";
import Logo from "../images/logo.jpg";
import '../styles/Header.css';
import { Link } from "react-router-dom";
import { LicoreraContext } from "./LicoreraContext";

export const Header = () => {
  const obj = useContext(LicoreraContext);
  const [carrito] = obj.value.carrito;
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" width="150"/>
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/productos/">PRODUCTOS</Link>
        </li>
        <li>
          <Link to="/dejanosMensaje/">DEJANOS TU MENSAJE</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart" onClick={obj.value.toogle}></box-icon>
        <span className="item__total">{carrito.length}</span>
      </div>
    </header>
  );
};
