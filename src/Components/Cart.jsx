import { Link } from "react-router-dom";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "./Context.jsx";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="p-8 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-2xl font-bold text-zinc-300 my-20">
            Your Cart is Empty
          </p>
        ) : (
          <ul className="flex flex-col gap-6 p-8">
            {cartItems.map((item, index) => (
              <li
                key={`${item.id}-${index}`}
                className="flex justify-between items-center text-zinc-800 font-bold"
              >
                <img src={item.image} alt={item.name} className="size-15" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button className="text-red-700 hover:text-red-500">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="w-full text-right border-t border-zinc-200">
          <button className="px-4 py-2 mt-8 bg-black text-white rounded-sm font-bold hover:bg-zinc-800 cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Link to={"/"}>
          <button className="flex items-center gap-2 mt-4 p-4 bg-black text-white rounded-sm hover:bg-zinc-800 cursor-pointer">
            <FaCartPlus />
            Go back Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
