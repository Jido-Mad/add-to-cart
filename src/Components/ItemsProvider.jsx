import { useState } from "react";
import { ItemsPortal } from "./Contexts.jsx";

function ItemsProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <ItemsPortal value={{ cart, addToCart, removeFromCart }}>
      {children}
    </ItemsPortal>
  );
}

export default ItemsProvider;
