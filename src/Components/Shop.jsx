import { Link } from "react-router-dom";
import products from "../Products.json";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./Context.jsx";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="p-8 font-sans">
      <div className="flex justify-around items-center">
        <h2 className="text-3xl font-bold">Shop</h2>
        <Link to={"/Cart"}>
          <FaShoppingCart className="text-2xl hover:text-zinc-800" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
