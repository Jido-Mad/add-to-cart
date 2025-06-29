const Cart = () => {
  const cartItems = ["sl"];

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Cart
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">
            Your cart is empty
          </p>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center border border-zinc-400 rounded-xl p-4">
              <img src="./src/assets/watch.jpg" alt="item" className="w-16" />
              <p>SmartWatch</p>
              <div className="flex gap-4 ">
                <span>+</span>
                <span>1</span>
                <span>-</span>
              </div>
              <p>$99</p>
              <button className="text-red-600 hover:text-red-800 hover:cursor-pointer">
                Remove
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
