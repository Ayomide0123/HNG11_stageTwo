const Product = ({ name, price, image }) => {
  return (
    <div className="product bg-[#383532] bg-opacity-25 flex flex-col items-center relative w-[300px] h-[180px] rounded-xl my-16">
      <img
        src={image}
        alt={name}
        width={200}
        className="absolute -top-[80px]"
      />
      <div className="z-10 absolute bottom-2 w-[100%] flex gap-1 flex-col items-center poppins-light">
        <h1 className="text-[#9C5E29] font-extrabold">{name}</h1>
        <p className="text-[#9C5E29] text-xs font-semibold">$ {price}</p>
        <div className="flex justify-between px-4 w-[100%] text-white gap-3">
          <div className="flex items-center justify-between w-[30%] border-gray-300-transparent border-solid border-2 rounded-md px-2">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <button className="w-[60%] px-5 py-2 bg-[#9C5E29] hover:bg-[#bd783c] transition-colors text-xs rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
