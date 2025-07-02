import { Link } from "react-router-dom";
import { FiMinusCircle } from "react-icons/fi";
import { FiPlusCircle } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";

const cartItem = {
  id: 2,
  name: "Headphones",
  price: "$89.99",
  image: "./src/assets/headphone.jpg",
  quantity: 1,
};

const Cart = () => {
  return (
    <div className="p-8 font-sans">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src={cartItem.image}
            alt={cartItem.name}
            className="w-32 h-32 object-cover rounded"
          />
          <div className="flex-1 w-full">
            <h3 className="text-xl font-semibold">{cartItem.name}</h3>
            <p className="text-gray-600">{cartItem.price}</p>
            <div className="flex items-center gap-4 mt-2 text-xl text-zinc-600">
              <FiMinusCircle className="hover:bg-zinc-600 hover:text-white rounded-full" />
              <span>1</span>
              <FiPlusCircle className="hover:bg-zinc-600 hover:text-white rounded-full" />
            </div>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4 sm:mt-0">
            Remove
          </button>
        </div>

        <div className="border-t mt-6 pt-4 text-right">
          <p className="text-lg font-bold">Total: ${cartItem.price}</p>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <Link to={"/"}>
          <button className="flex items-center gap-2 mt-4 p-4 bg-black text-white rounded-sm hover:bg-zinc-800">
            <FaCartPlus />
            Go back Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
