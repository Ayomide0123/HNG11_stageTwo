import { Icon } from "@iconify/react";
import Counter from "../Counter/Counter";

const CartItem = ({ id, name, price, image, removeFromCart }) => {
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-4 items-center p-4 border-gray-300-transparent border-solid border-2 rounded-md my-4 gap-5">
      <Icon
        icon="bi:x"
        className="absolute top-3 right-3 cursor-pointer text-black"
        onClick={() => removeFromCart(id)}
      />
      <div className="col-span-1 flex items-center justify-center gap-5">
        <img src={image} className="w-[100px] h-auto" alt={name} />
        <p className="text-[#9C5E29] font-bold text-sm tracking-wide">{name}</p>
        {/* <div className="text-center sm:text-left">
          <p className="text-sm font-semibold">
            <span className="text-[#BDBDBD]">Metal: </span>
            {metal}
          </p>
          <p className="text-sm font-semibold">
            <span className="text-[#BDBDBD]">size: </span>
            {size} cm
          </p>
        </div> */}
      </div>

      <p className="col-span-1 font-semibold mt-2 sm:mt-0 text-center">
        NGN {price}
      </p>

      <div className="col-span-1 flex justify-center mt-2 sm:mt-0">
        <Counter />
      </div>

      <p className="col-span-1 text-[#9C5E29] font-bold flex justify-center mt-2 sm:mt-0">
        NGN {price}
      </p>
    </div>
  );
};

export default CartItem;
