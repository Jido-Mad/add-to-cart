import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";

function Cart() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
      <p className="text-gray-600 text-center mb-6">Your cart is empty.</p>
      <div className="flex justify-center">
        <Link to={"/"}>
          <button className="flex items-center gap-2 p-4 bg-blue-600 text-white rounded-md hover:bg-blue-500 cursor-pointer">
            <BsFillCartPlusFill />
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
