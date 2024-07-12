import logo from "../../assets/img/mdi--ring.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#9C5E29] text-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-8 md:px-12 py-3">
        <div className="w-[100px] text-white">
          <Link to="/" className="flex flex-col items-center">
            <img src={logo} width="24px" height="auto" alt="Logo" />
            <p className="logo--text -mt-2">Bling</p>
          </Link>
        </div>

        <div className="poppins-light mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row justify-between gap-4 md:gap-8 w-full md:w-[400px]">
            <li className="text-center md:text-left">Home</li>
            <li className="text-center md:text-left">About</li>
            <li className="text-center md:text-left">Products</li>
          </ul>
        </div>

        <div className="poppins-light text-center md:text-right">
          <p>07040525298</p>
        </div>
      </div>
      <hr />
      <div className="py-2 poppins-light">
        <p className="text-center">© 2024 All Rights Reserved - Blings</p>
      </div>
    </div>
  );
};

export default Footer;
