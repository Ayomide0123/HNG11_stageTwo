import newsletterBgImage from "../../assets/img/newsletter--bg-img.png";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div
      className="relative w-[100vw] h-[95vh] -mt-1 -mb-1 text-white flex
      justify-center items-center"
    >
      <img src={newsletterBgImage} className="newsletter-img" />
      <div className="text-center z-10">
        <h1>
          Sign Up to Receive Updates <br /> on Our New
          <span className="text-[#9C5E29]">Blings!</span>
        </h1>
        <form>
          <input type="email" placeholder="Enter Your Email" />
          <button>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
