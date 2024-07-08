import newsletterBgImage from "../../assets/img/newsletter--bg-img.png";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="relative h-screen text-white flex justify-center items-center overflow-hidden my-16">
      <img
        src={newsletterBgImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Newsletter Background"
      />

      <div className="text-white w-fit mx-auto my-[8%] text-center flex flex-col gap-6 items-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light main--text leading-snug">
          Sign Up to Receive Updates on <br /> Our New
          <span className="text-[#FB7400]"> Blings!</span>
        </h1>

        <div className="w-[90%] sm:w-[70%] md:w-[55%] lg:w-[45%] flex gap-3">
          <div className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md shadow-md rounded-full p-2 flex-grow">
            <input
              type="text"
              placeholder="Email"
              className=" poppins-light bg-transparent border-none focus:outline-none px-3 py-1 text-white placeholder-white w-full"
            />
          </div>

          <button className="px-4 py-2 inline-block bg-[#9C5E29] hover:bg-[#bd783c] transition-colors main--text rounded-md text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
