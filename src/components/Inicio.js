import React from "react";
import { Link } from "react-router-dom";
import Portada from "../images/licores.jpg";
import '../styles/Inicio.css';

export const Inicio = () => {
  return (
    <div className="inicio">
      <Link to="/">
        <h1 className="title">Inicio</h1>
      </Link>
      <Link to="/productos">
        <h1 className="title">Productos</h1>
      </Link>
      <img src={Portada} alt="inicio"/>
    </div>
  );
};
