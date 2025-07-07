import { useState } from "react";
import { ItemsPortal } from "./Contexts.jsx";

function ItemsProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return <ItemsPortal value={{ cart, addToCart }}>{children}</ItemsPortal>;
}

export default ItemsProvider;
