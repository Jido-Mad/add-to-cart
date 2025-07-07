import { useState } from "react";
import { ItemsPortal } from "./Contexts.jsx";

function ItemsProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    {
      /* Modify the code down below to make so that addtocart button is removed if item exists, and make sure quantity goes up when user clicks on arrows */
    }
    setCart((prevCart) => [...prevCart, product]);
  }

  return <ItemsPortal value={{ cart, addToCart }}>{children}</ItemsPortal>;
}

export default ItemsProvider;
