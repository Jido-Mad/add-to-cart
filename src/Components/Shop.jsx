import items from "../Products.json";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

function Shop() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-around mb-8">
        <h1 className="text-3xl font-bold text-center">Shop</h1>
        <Link to="/cart">
          <button className="flex items-center gap-2 p-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 cursor-pointer">
            <BsCart4 />
            Go to Cart
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center border rounded-lg shadow-md p-4 w-64 text-center gap-2 justify-around"
          >
            <img className="w-40" src={item.image} alt={item.name} />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-700 mb-4">${item.price}</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
