import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Quantitiy(props) {
  return (
    <div className="flex items-center gap-4">
      <IoIosArrowBack className="rounded-full hover:bg-zinc-200 w-5 h-5 transition ease-in-out duration-300 " />
      <span>{props.quantity}</span>
      <IoIosArrowForward className="rounded-full hover:bg-zinc-200 w-5 h-5 transition ease-in-out duration-200 " />
    </div>
  );
}

export default Quantitiy;
