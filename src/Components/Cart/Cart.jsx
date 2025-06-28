const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      quantity: 1,
      image: "https://via.placeholder.com/150?text=Laptop",
    },
    {
      id: 2,
      name: "Headphones",
      price: 89.99,
      quantity: 2,
      image: "https://via.placeholder.com/150?text=Headphones",
    },
  ];

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
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-md font-medium text-gray-700">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <button className="text-red-600 hover:text-red-800 font-medium">
                  Remove
                </button>
              </div>
            ))}
            <div className="mt-6 text-right">
              <h3 className="text-lg font-semibold text-gray-800">
                Total: $
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h3>
              <button className="mt-4 bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700 transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
