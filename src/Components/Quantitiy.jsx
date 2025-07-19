import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

function Quantitiy() {
  const [quantitiy, setQuantity] = useState(1);

  function increment() {
    setQuantity(() => quantitiy + 1);
  }
  function decrement() {
    setQuantity(() => (quantitiy > 1 ? quantitiy - 1 : 1));
  }

  return (
    <div className="flex items-center gap-4">
      <IoIosArrowBack
        onClick={decrement}
        className="rounded-full hover:bg-zinc-200 w-5 h-5 transition ease-in-out duration-300 "
      />
      <span>{quantitiy}</span>
      <IoIosArrowForward
        onClick={increment}
        className="rounded-full hover:bg-zinc-200 w-5 h-5 transition ease-in-out duration-200 "
      />
    </div>
  );
}

export default Quantitiy;
