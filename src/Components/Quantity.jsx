import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  function incrementQuantity() {
    setQuantity(() => quantity + 1);
  }

  function decrementQuantity() {
    setQuantity(() => quantity - 1);
  }

  return (
    <div className="flex gap-6 items-center select-none">
      <CiCirclePlus
        onClick={incrementQuantity}
        className="text-2xl hover:text-white hover:bg-green-400 rounded-full"
      />
      <span>{quantity}</span>
      <CiCircleMinus
        onClick={quantity > 1 ? decrementQuantity : ""}
        className="text-2xl hover:text-white hover:bg-red-400 rounded-full"
      />
    </div>
  );
}

export default Quantity;
