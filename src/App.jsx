import { Outlet } from "react-router-dom";
import { ItemsPortal } from "./Components/Contexts.jsx";
import products from "./Products.json";

function App() {
  return (
    <div>
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1>My Store</h1>
      </header>
      <main>
        <ItemsPortal value={products}>
          <Outlet />
        </ItemsPortal>
      </main>
    </div>
  );
}

export default App;
