import { Icon } from "@iconify/react";
import Counter from "../Counter/Counter";

const CartItem = ({ name, price, image, metal, size }) => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-between items-center p-4 border-gray-300-transparent border-solid border-2 rounded-md my-4">
      <Icon icon="bi:x" className="absolute top-3 right-3" />
      <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
        <img src={image} className="w-[100px] h-auto" />
        <div className="text-center sm:text-left">
          <p className="text-[#9C5E29] font-bold text-lg tracking-wide">
            {name}
          </p>
          <p className="text-sm font-semibold">
            <span className="text-[#BDBDBD]">Metal: </span>
            {metal}
          </p>
          <p className="text-sm font-semibold">
            <span className="text-[#BDBDBD]">Size: </span>
            {size} cm
          </p>
        </div>
      </div>

      <p className="flex items-center font-semibold mt-2 sm:mt-0">$ {price}</p>

      <Counter />

      <p className="text-[#9C5E29] font-bold flex items-center mt-2 sm:mt-0">
        $ {price}
      </p>
    </div>
  );
};

export default CartItem;
