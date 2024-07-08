import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/mdi--ring.png";
import { Icon } from "@iconify/react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("products");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const cartItemsCount = 3; // Example count of cart items

  const getFillColor = (path) => {
    return location.pathname === path ? "#FB7400" : "white";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to top whenever menu state changes
  useEffect(() => {
    scrollToTop();
  }, [menu]);

  return (
    <div className="poppins-light fixed top-10 w-full z-50">
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-20 backdrop-blur-md shadow-md rounded-xl border-[#9C5E29] border-[1px]">
        <div className="flex justify-between items-center h-16">
          <div className="w-[100px] flex flex-col items-center text-white">
            <img src={logo} width="24px" height="auto" alt="Logo" />
            <p className="logo--text -mt-2">Bling</p>
          </div>

          {/* Navbar Links for Desktop */}
          <div className="hidden sm:flex items-center">
            <ul className="flex gap-16 px-3">
              <li
                className={`cursor-pointer flex justify-center ${
                  menu === "products" ? "text-[#FB7400]" : "text-white"
                }`}
                onClick={() => setMenu("products")}
              >
                <Link
                  to="/"
                  className="flex items-center gap-1"
                  style={{ color: getFillColor("/") }}
                >
                  <Icon icon="pepicons-print:cv" />
                  Products
                </Link>
              </li>

              <li
                className={`cursor-pointer flex items-center ${
                  menu === "products" ? "text-[#FB7400]" : "text-white"
                }`}
                onClick={() => setMenu("products")}
              >
                <Link
                  to="/cart"
                  className="flex items-center gap-1 relative"
                  style={{ color: getFillColor("/cart") }}
                >
                  <Icon icon="mdi:cart-outline" />
                  <p>Cart</p>
                  <span className="bg-[#720000] text-white rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 left-2 text-[0.5rem]">
                    {cart.length}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Menu Button for Mobile */}
          <div className="sm:hidden flex gap-3">
            <div
              className={`cursor-pointer flex items-center ${
                menu === "products" ? "text-[#FB7400]" : "text-white"
              }`}
              onClick={() => setMenu("products")}
            >
              <Link
                to="/cart"
                className="flex items-center gap-1 relative"
                style={{ color: getFillColor("/cart") }}
              >
                <Icon icon="mdi:cart-outline" />
                <p>Cart</p>
                <span className="bg-[#720000] text-white rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 left-2 text-[0.5rem]">
                  {cart.length}
                </span>
              </Link>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <Icon icon="material-symbols:menu" width="24px" height="24px" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col items-center gap-4 pb-2 bg-transparent">
              <li
                className={`cursor-pointer flex justify-center ${
                  menu === "products" ? "text-[#FB7400]" : "text-white"
                }`}
                onClick={() => {
                  setMenu("products");
                  setIsMobileMenuOpen(false);
                }}
              >
                <Link
                  to="/"
                  className="flex items-center gap-1"
                  style={{ color: getFillColor("/") }}
                >
                  <Icon icon="pepicons-print:cv" />
                  Products
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
