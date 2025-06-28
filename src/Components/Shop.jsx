const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 999.99,
      image: "https://via.placeholder.com/150?text=Laptop",
    },
    {
      id: 2,
      name: "Headphones",
      price: 89.99,
      image: "https://via.placeholder.com/150?text=Headphones",
    },
    {
      id: 3,
      name: "Smartphone",
      price: 699.99,
      image: "https://via.placeholder.com/150?text=Smartphone",
    },
    {
      id: 4,
      name: "Watch",
      price: 199.99,
      image: "https://via.placeholder.com/150?text=Watch",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition flex items-center">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          View Cart
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {product.name}
            </h3>
            <p className="text-gray-500">${product.price.toFixed(2)}</p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
