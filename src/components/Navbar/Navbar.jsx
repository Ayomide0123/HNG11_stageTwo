import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/mdi--ring.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="relative flex justify-center z-10">
      <div className="absolute top-10 w-[70%] mx-auto flex justify-between items-center border-8 border-solid border-orange-950 px-[22px] text-white bg-debug">
        <div className="bg-slate-600 w-[100px] flex flex-col items-center bg-debug">
          <img src={logo} width="24px" height="auto" alt="Logo" />
          <p>Bling</p>
        </div>

        <div className="bg-debug">
          <ul className="flex gap-8 bg-debug">
            <li
              className={`cursor-pointer ${
                menu === "home" ? "text-[#9C5E29]" : "text-white"
              }`}
              onClick={() => {
                setMenu("home");
                console.log("Clicked Home");
              }}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer ${
                menu === "about" ? "text-[#9C5E29]" : "text-white"
              }`}
              onClick={() => {
                setMenu("about");
                console.log("Clicked About");
              }}
            >
              About
            </li>
            <li
              className={`cursor-pointer ${
                menu === "products" ? "text-[#9C5E29]" : "text-white"
              }`}
              onClick={() => {
                setMenu("products");
                console.log("Clicked Products");
              }}
            >
              Products
            </li>
            <li
              className={`cursor-pointer ${
                menu === "cart" ? "text-[#9C5E29]" : "text-white"
              }`}
              onClick={() => {
                setMenu("cart");
                console.log("Clicked Cart");
              }}
            >
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
