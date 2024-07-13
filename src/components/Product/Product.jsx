import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Product = ({ id, name, price, image }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    addToCart({
      id,
      name,
      price,
      image,
      quantity: newQuantity,
      totalPrice: newQuantity * price,
    });
  };

  return (
    <div className="product bg-[#383532] bg-opacity-25 flex flex-col items-center relative w-[300px] h-[180px] rounded-xl my-16 hover:enlarge">
      <Link to={`/product/${id}`} className="absolute -top-[90px]">
        <img
          src={image}
          alt={name}
          width={200}
          className=" transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
        />
      </Link>
      <div className="z-10 absolute bottom-2 w-[100%] flex gap-1 flex-col items-center poppins-light ">
        <Link to={`/product/${id}`}>
          <h1 className="text-[#9C5E29] poppins-bolder transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer">
            {name}
          </h1>
        </Link>
        <p className="text-[#9C5E29] text-xs poppins-bold ">${price}</p>
        <div className="flex justify-between px-4 w-[100%] text-white gap-3">
          <div className="flex items-center">
            <span className="text-white mr-2">Qty:</span>
            <span className="text-white">{quantity}</span>
          </div>
          <button
            className="w-[60%] px-5 py-2 bg-[#9C5E29] hover:bg-[#bd783c] transition-colors poppins-bold text-sm rounded-md"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
