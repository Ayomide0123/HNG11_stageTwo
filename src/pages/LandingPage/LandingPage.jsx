import { useState, useEffect } from "react";
import bgImage from "../../assets/img/hero--bg-img.png";
import search from "../../assets/img/search--icon.png";
import "./LandingPage.css";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const appId = import.meta.env.VITE_APP_APP_ID;
  const organizationId = import.meta.env.VITE_APP_ORGANIZATION_ID;

  const [activeTab, setActiveTab] = useState("newArrivals");
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(
        `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=${organizationId}&reverse_sort=false&page=${page}&size=10&Appid=${appId}&Apikey=${apiKey}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        setProducts(data.items);
      } else {
        console.error(
          "Error: Expected JSON response, but received:",
          await response.text()
        );
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        { ...product, quantity: 1, totalPrice: product.price },
      ]);
    }
  };

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
                className="poppins-light bg-transparent border-none focus:outline-none px-2 text-white placeholder-white w-full"
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

        <ul className="poppins-bold flex gap-4 sm:gap-8 md:gap-10 justify-center mx-auto my-4 text-sm sm:text-base md:text-sm lg:text-lg">
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

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-4">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg animate-pulse shadow-md"
              >
                <div className="h-48 bg-gray-200 rounded-md"></div>
                <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>
                <div className="mt-2 h-6 bg-gray-300 rounded-md"></div>
                <div className="flex justify-between items-center mt-4">
                  <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
                  <div className="flex gap-2 items-center">
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center px-4 mt-12">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                image={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                price={product.current_price[0]?.NGN[0]}
                addToCart={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.current_price[0]?.NGN[0],
                    image: `https://api.timbu.cloud/images/${product.photos[0].url}`,
                  })
                }
              />
            ))}
          </div>
        )}

        <div className="flex justify-center my-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-[#9C5E29] text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-2 bg-white text-[#9C5E29] rounded">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-[#9C5E29] text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="cart">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - Total Price:{" "}
                {item.totalPrice} NGN
              </li>
            ))}
          </ul>
        </div>

        <Newsletter />
        <Footer />
      </main>
    </div>
  );
};

export default LandingPage;
