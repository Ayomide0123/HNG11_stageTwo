import { useState } from "react";
import { Icon } from "@iconify/react";

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  removeFromCart,
  updateCartItem,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const increment = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateCartItem(id, newQuantity);
  };

  const decrement = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
      updateCartItem(id, newQuantity);
    }
  };

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
      </div>

      <p className="col-span-1 font-semibold mt-2 sm:mt-0 text-center text-black poppins-bold">
        NGN {price}
      </p>

      <div className="col-span-1 flex justify-center mt-2 sm:mt-0">
        <div className="flex items-center justify-between w-[100px] border-gray-300-transparent border-solid border-2 rounded-md px-2">
          <button onClick={decrement} className="text-black">
            -
          </button>
          <p className="text-[#9C5E29]">{itemQuantity}</p>
          <button onClick={increment} className="text-black">
            +
          </button>
        </div>
      </div>

      <p className="col-span-1 text-[#9C5E29] font-bold flex justify-center mt-2 sm:mt-0">
        NGN {price * itemQuantity}
      </p>
    </div>
  );
};

export default CartItem;
