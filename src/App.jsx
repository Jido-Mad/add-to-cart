import { Outlet } from "react-router-dom";
import ItemsProvider from "./Components/ItemsProvider.jsx";

function App() {
  return (
    <>
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1>TechStore</h1>
      </header>
      <main>
        <ItemsProvider>
          <Outlet />
        </ItemsProvider>
      </main>
    </>
  );
}

export default App;
