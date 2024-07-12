import { Icon } from "@iconify/react";
import Counter from "../Counter/Counter";

const CartItem = ({ id, name, price, image, metal, size, removeFromCart }) => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-4 items-center p-4 border-gray-300-transparent border-solid border-2 rounded-md my-4 gap-5">
      <Icon
        icon="bi:x"
        className="absolute top-3 right-3 cursor-pointer"
        onClick={() => removeFromCart(id)}
      />
      <div className="col-span-1 flex items-center justify-center gap-5">
        <img src={image} className="w-[100px] h-auto" alt={name} />
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

      <p className="col-span-1 font-semibold mt-2 sm:mt-0 text-center">
        $ {price}
      </p>

      <div className="col-span-1 flex justify-center mt-2 sm:mt-0">
        <Counter />
      </div>

      <p className="col-span-1 text-[#9C5E29] font-bold flex justify-center mt-2 sm:mt-0">
        $ {price}
      </p>
    </div>
  );
};

export default CartItem;
