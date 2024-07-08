import { Icon } from "@iconify/react";
import Counter from "../Counter/Counter";

const CartItem = ({ name, price, image, metal, size }) => {
  return (
    <div className="relative flex justify-between items-center pl-[30px] pr-[10px] py-[25px] border-gray-300-transparent border-solid border-2 rounded-md my-4">
      <Icon icon="bi:x" className="absolute top-3 right-3" />
      <div className="flex items-center gap-5">
        <img src={image} className="w-[100px] h-auto" />
        <div>
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

      <p className="flex items-center font-semibold">$ {price}</p>

      <Counter />

      <p className="text-[#9C5E29] font-bold flex items-center">$ {price}</p>
    </div>
  );
};

export default CartItem;
