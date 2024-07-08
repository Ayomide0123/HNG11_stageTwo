import Counter from "../Counter/Counter";

const Recent = ({ name, price, image }) => {
  return (
    <div className="product bg-[#383532] bg-opacity-25 flex flex-col items-center relative w-full max-w-[300px] h-[180px] rounded-xl mb-20 mx-auto sm:mx-0">
      <img
        src={image}
        alt={name}
        className="absolute -top-[40px] md:-top-[90px] w-[150px] sm:w-[200px]"
      />
      <div className="z-10 absolute bottom-2 w-full flex gap-1 flex-col items-center poppins-light px-2 sm:px-4">
        <h1 className="text-[#9C5E29] font-extrabold text-center text-sm sm:text-base">
          {name}
        </h1>
        <p className="text-[#9C5E29] text-xs sm:text-sm font-semibold">
          $ {price}
        </p>
        <div className="flex justify-between w-full text-white gap-2 sm:gap-3">
          <Counter />
          <button className="w-[60%] px-2 py-1 sm:px-5 sm:py-2 bg-[#9C5E29] hover:bg-[#bd783c] transition-colors text-xs sm:text-sm rounded-md">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
