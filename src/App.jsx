import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header className="p-4 bg-gray-800 text-white text-center">
        <h1>My Store</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
