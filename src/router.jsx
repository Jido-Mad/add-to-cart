import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Shop from "./Components/Shop.jsx";
import Cart from "./Components/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Shop /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

export default router;
