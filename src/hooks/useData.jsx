import { useEffect, useState } from "react";
import Data from "../Data.js";

export const useData = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    const producto = Data.items;
    setProductos(producto ? producto : []);
  }, []);
  console.log("useData ", productos);
  return {productos};
};
