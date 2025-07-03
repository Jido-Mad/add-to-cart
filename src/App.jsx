import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./CartContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
