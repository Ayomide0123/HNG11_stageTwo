import logo from "../../assets/img/mdi--ring.png";

const Footer = () => {
  return (
    <div className="bg-[#9C5E29] text-white">
      <div className="flex justify-between px-12 py-3">
        <div className="w-[100px] flex flex-col items-center text-white">
          <img src={logo} width="24px" height="auto" alt="Logo" />
          <p className="logo--text -mt-2">Bling</p>
        </div>

        <div className="poppins-light">
          <ul className="flex justify-between w-[400px]">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
          </ul>
        </div>

        <div className="poppins-light">
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
