import bgImage from "../../assets/img/hero--bg-img.png";
import search from "../../assets/img/search--icon.png";
import "./LandingPage.css";
import product_list from "../../components/Product/Products";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
const LandingPage = () => {
  const [activeTab, setActiceTab] = useState("newArrivals");

  return (
    <div>
      <header className="pt-8 relative p-[9vh]">
        <img src={bgImage} className="hero-image" />
        <div className="text-white w-fit mx-auto my-[8%] text-center flex flex-col gap-6 items-center">
          <h1 className="text-5xl font-light main--text leading-snug">
            Unveil Your Inner Radiance with Our <br /> Exclusive{" "}
            <span className="text-[#FB7400]">Jewelry</span> Collections.
          </h1>
          {/*  */}
          <div className="w-[45%]">
            <div className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md shadow-md rounded-full p-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none px-2 text-white placeholder-white"
              />
              <button className="bg-[#9C5E29] p-1 rounded-full">
                <img src={search} />
              </button>
            </div>
          </div>
          {/*  */}
          <button className="px-5 py-2 inline-block bg-[#9C5E29] hover:bg-[#bd783c] transition-colors main--text rounded-md">
            Explore our Collections
          </button>
        </div>
      </header>

      <main className="bg-slate-300">
        <h1 className="text-center text-white pt-8 text-3xl font-light main--text leading-relaxed tracking-wide">
          Discover Timeless Jewelries Creations <br /> Just for{" "}
          <span className="text-[#9C5E29]">You!</span>
        </h1>

        <ul className="flex gap-10 justify-between w-[50%] mx-auto my-4">
          <li
            className={`cursor-pointer ${
              activeTab === "newArrivals" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setActiceTab("newArrivals")}
          >
            NEW ARRIVALS{" "}
            {activeTab === "newArrivals" ? (
              <hr className="hr--element mx-auto" />
            ) : null}
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "categories" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setActiceTab("categories")}
          >
            CATEGORIES{" "}
            {activeTab === "categories" ? (
              <hr className="hr--element mx-auto" />
            ) : null}
          </li>
          <li
            className={`cursor-pointer ${
              activeTab === "bestSelling" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setActiceTab("bestSelling")}
          >
            BEST SELLING{" "}
            {activeTab === "bestSelling" ? (
              <hr className="hr--element mx-auto" />
            ) : null}
          </li>
        </ul>

        <div className="mt-28 grid grid-cols-3 place-items-center">
          {product_list.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
