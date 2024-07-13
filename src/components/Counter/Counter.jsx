import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex items-center justify-between w-[100px] border-gray-300-transparent border-solid border-2 rounded-md px-2">
      <button onClick={decrement} className="text-black">
        -
      </button>
      <p className="text-[#9C5E29]">{count}</p>
      <button onClick={increment} className="text-black">
        +
      </button>
    </div>
  );
};

export default Counter;
