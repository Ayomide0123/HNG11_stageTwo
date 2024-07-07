import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/mdi--ring.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [menu, setMenu] = useState("products");

  return (
    <>
      <div className="fixed top-10 w-full z-50">
        <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-20 backdrop-blur-md shadow-md rounded-xl border-[#9C5E29] border-[1px]">
          <div className="flex justify-between items-center h-16">
            <div className="w-[100px] flex flex-col items-center text-white">
              <img src={logo} width="24px" height="auto" alt="Logo" />
              <p className="logo--text -mt-2">Bling</p>
            </div>

            <div className="">
              <ul className="flex gap-16 px-3 ">
                <li
                  className={`cursor-pointer flex justify-center ${
                    menu === "home" ? "text-[#FB7400]" : "text-white"
                  }`}
                  onClick={() => {
                    setMenu("home");
                  }}
                >
                  <Link to="/" className="flex items-center gap-1">
                    <Icon icon="material-symbols-light:home-outline" />
                    <p>Home</p>
                  </Link>
                </li>
                <li
                  className={`cursor-pointer flex justify-center ${
                    menu === "about" ? "text-[#FB7400]" : "text-white"
                  }`}
                  onClick={() => {
                    setMenu("about");
                  }}
                >
                  <Link to="/" className="flex items-center gap-1">
                    <Icon icon="clarity:avatar-line" />
                    <p>About</p>
                  </Link>
                </li>
                <li
                  className={`cursor-pointer flex justify-center ${
                    menu === "products" ? "text-[#FB7400]" : "text-white"
                  }`}
                  onClick={() => {
                    setMenu("products");
                  }}
                >
                  <Link to="/" className="flex items-center gap-1">
                    <Icon icon="pepicons-print:cv" />
                    Products
                  </Link>
                </li>
                <li
                  className={`cursor-pointer flex justify-center ${
                    menu === "cart" ? "text-[#FB7400]" : "text-white"
                  }`}
                  onClick={() => {
                    setMenu("cart");
                  }}
                >
                  <Link to="/cart" className="flex items-center gap-1">
                    <Icon icon="mdi:cart-outline" />
                    <p>Cart</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/* <div className="relative flex justify-center z-10 bg-white bg-opacity-20">
        <div className="absolute top-10 w-[70%] mx-auto flex justify-between items-center border-8 border-solid border-orange-950 px-[22px] text-white ">
          <div className="bg-slate-600 w-[100px] flex flex-col items-center ">
            <img src={logo} width="24px" height="auto" alt="Logo" />
            <p>Bling</p>
          </div>

          <div className="">
            <ul className="flex gap-8 ">
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
      </div> */}
    </>
  );
};

export default Navbar;
