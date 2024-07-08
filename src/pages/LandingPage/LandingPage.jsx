import { useState } from "react";
import bgImage from "../../assets/img/hero--bg-img.png";
import search from "../../assets/img/search--icon.png";
import "./LandingPage.css";
import product_list from "../../components/Product/Products";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("newArrivals");

  return (
    <div>
      <header className="pt-[20vh] relative px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <img
          src={bgImage}
          className="hero-image w-full object-cover"
          alt="Hero"
        />
        <div className="text-white w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-8 text-center flex flex-col gap-6 items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light main--text leading-snug">
            Unveil Your Inner Radiance with Our{" "}
            <br className="hidden sm:block" /> Exclusive{" "}
            <span className="text-[#FB7400]">Jewelry</span> Collections.
          </h1>
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
            <div className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md shadow-md rounded-full p-2">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none focus:outline-none px-2 text-white placeholder-white w-full"
              />
              <button className="bg-[#9C5E29] p-1 rounded-full">
                <img src={search} alt="Search Icon" />
              </button>
            </div>
          </div>
          <button className="px-5 py-2 inline-block bg-[#9C5E29] hover:bg-[#bd783c] transition-colors main--text rounded-md">
            Explore our Collections
          </button>
        </div>
      </header>

      <main className="bg-[#C7CCD9]">
        <h1 className="text-center text-white pt-8 text-2xl sm:text-3xl font-light main--text leading-relaxed tracking-wide">
          Discover Timeless Jewelry Creations <br className="hidden sm:block" />{" "}
          Just for <span className="text-[#9C5E29]">You!</span>
        </h1>

        <ul className="flex gap-4 sm:gap-8 md:gap-10 justify-center mx-auto my-4 text-sm sm:text-base md:text-lg lg:text-xl">
          <li
            className={`cursor-pointer ${
              activeTab === "newArrivals" ? "text-[#9C5E29]" : "text-white"
            }`}
            onClick={() => setActiveTab("newArrivals")}
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
            onClick={() => setActiveTab("categories")}
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
            onClick={() => setActiveTab("bestSelling")}
          >
            BEST SELLING{" "}
            {activeTab === "bestSelling" ? (
              <hr className="hr--element mx-auto" />
            ) : null}
          </li>
        </ul>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-4">
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
