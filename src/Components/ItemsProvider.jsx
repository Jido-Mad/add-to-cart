import { useState } from "react";
import { ItemsPortal } from "./Contexts.jsx";

export const ItemsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  return <ItemsPortal value={{ cart, addToCart }}>{children}</ItemsPortal>;
};
