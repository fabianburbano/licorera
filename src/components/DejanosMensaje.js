import React from 'react';
import "../styles/DejanosMensaje.css";

export const DejanosMensaje = () => {
  return (
    <div className="dejanosMensaje">
        <h1>Dejanos tu mensaje</h1>
        <br/>
        <textarea placeholder="Escribenos tu opinion u sugerencia"></textarea>
        <br/>
        <button>Enviar</button>
    </div>
  )
}
