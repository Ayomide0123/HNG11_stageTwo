// import Navbar from "../../components/Navbar/Navbar";
import bgImage from "../../assets/img/hero--bg-img.png";
import "./LandingPage.css";
import products from "../../components/Product/Products.json";
import Product from "../../components/Product/Product";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
const LandingPage = () => {
  return (
    <div>
      <header className="pt-8 relative p-[9vh]">
        <img src={bgImage} className="hero-image" />
        <div className="text-white w-fit mx-auto my-[8%] text-center flex flex-col gap-6">
          <h1 className="text-5xl font-light">
            Unveil Your Inner Radiance with Our <br /> Exclusive{" "}
            <span className="text-[#9C5E29]">Jewelry</span> Collections.
          </h1>
          <input />
          <button className="px-5 py-2 inline-block bg-[#9C5E29] hover:bg-[#bd783c] transition-colors">
            explore
          </button>
        </div>
      </header>

      <main className="bg-slate-400">
        <h1 className="text-center text-white">
          Discover Timeless Jewelries Creations <br /> Just for{" "}
          <span className="text-[#9C5E29]">You!</span>
        </h1>

        <ul className="flex gap-10 justify-center">
          <li>NEW ARRIVALS</li>
          <li>CATEGORIES</li>
          <li>BEST SELLING</li>
        </ul>

        <div className="mt-5 grid grid-cols-3">
          {products.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </main>
      <Newsletter />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
