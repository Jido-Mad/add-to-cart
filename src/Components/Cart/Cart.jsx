import { Link } from "react-router-dom";

const Cart = ({ name, price, image }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Your Cart
        </h1>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center border border-zinc-400 rounded-xl p-4">
            <img src={image} alt={name} className="w-16" />
            <p>{name}</p>
            <div className="flex gap-4 ">
              <span>+</span>
              <span>1</span>
              <span>-</span>
            </div>
            <p>{price}</p>
            <button className="text-red-600 hover:text-red-800 hover:cursor-pointer">
              Remove
            </button>
          </div>
        </div>
      </div>

      <Link to={"/"}>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition flex items-center mx-auto my-10">
          {/*svg for the cart icon*/}
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
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Go back to Shop
        </button>
      </Link>
    </div>
  );
};

export default Cart;
