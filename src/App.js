import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { LicoreraRouter } from "./router/LicoreraRouter";
import "boxicons";
import { BrowserRouter } from "react-router-dom";
import { useData } from "./hooks/useData";
import { LicoreraContext } from "./components/LicoreraContext";
import { Carrito } from "./components/Carrito";

function App() {
  const data = useData();
  const [menu, setMenu] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  let toogleMenu = () => {
    setMenu(!menu);
  };
  const addProducto = (id) => {
    console.log("llego el id", id);
    let puedeAgregar = carrito.every((item) => item.id !== id);
    if (puedeAgregar) {
      const prodAgrega = data.productos.filter((item) => item.id === id);
      setCarrito([...carrito, ...prodAgrega]);
    } else {
      alert("el producto ya esta en el carrito");
    }
  };
  console.log(localStorage.getItem('dataCarrito'));
  useEffect(() => {
    console.log("va a intentar recuperar del local ", carrito)
    const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []); //obtener carritos desde localStorage
  useEffect(() => {
    console.log("viene a setear al local ", carrito);
    if(carrito.length > 0){
      localStorage.setItem('dataCarrito', JSON.stringify(carrito));
    }
  }, [carrito]); //setear carritos al localStorage
  useEffect(() => {
    let tot = carrito.reduce((prev, item) =>
      prev + (item.cantidad * item.precio), 0);
    setTotal(tot);
  }, [carrito]); //setear total al agregar o eliminar productos del carrito
  useEffect(()=>{
    setProductosFiltrados(data.productos);
    },[data.productos]);//setear los productos filtrados con los que vienen de bd
  const value = {
    productos: [data.productos],
    menu: menu,
    toogle: toogleMenu,
    addProducto: addProducto,
    carrito: [carrito, setCarrito],
    total: [total, setTotal],
    productosFiltrados: [productosFiltrados, setProductosFiltrados]
  };

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <LicoreraContext.Provider value={{ value }}>
            <Header />
            <Carrito />
            <LicoreraRouter />
          </LicoreraContext.Provider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
