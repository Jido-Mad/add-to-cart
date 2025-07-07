import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useContext } from "react";
import { ItemsPortal } from "./Contexts.jsx";

function Cart() {
  const { cart } = useContext(ItemsPortal);

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-10">
      <div className="w-[70%] flex items-center justify-between">
        <h1 className="text-3xl font-bold text-center">Your Cart</h1>
        <div className="flex justify-center">
          <Link to="/">
            <button className="flex items-center gap-2 p-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 cursor-pointer">
              <BsFillCartPlusFill />
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[70%] min-h-40 flex flex-col items-center justify-start border border-zinc-500 rounded-md px-6 shadow-md">
        {cart.length === 0 ? (
          <div className="min-h-40 flex items-center justify-center">
            <p className="w-full text-center text-gray-700">
              Your cart is empty
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="w-full flex flex-row justify-between items-center border-b rounded-sm border-zinc-300 p-4"
            >
              <img className="w-12" src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.quantity}</p>
              <button className="text-red-700 hover:text-red-600 hover:cursor-pointer">
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
