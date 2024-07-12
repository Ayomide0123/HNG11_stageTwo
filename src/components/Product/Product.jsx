import Counter from "../Counter/Counter";
import { useCart } from "../../context/CartContext";

const Product = ({ name, price, image, metal, size }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name, price, image, metal, size });
  };

  return (
    <div className="product bg-[#383532] bg-opacity-25 flex flex-col items-center relative w-[300px] h-[180px] rounded-xl my-16">
      <img
        src={image}
        alt={name}
        width={200}
        className="absolute -top-[80px]"
      />
      <div className="z-10 absolute bottom-2 w-[100%] flex gap-1 flex-col items-center poppins-light">
        <h1 className="text-[#9C5E29] poppins-bolder">{name}</h1>
        <p className="text-[#9C5E29] text-xs poppins-bold ">${price}</p>
        <div className="flex justify-between px-4 w-[100%] text-white gap-3">
          <Counter />
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
