import newsletterBgImage from "../../assets/img/newsletter--bg-img.png";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="relative h-screen text-white flex justify-center items-center overflow-hidden my-20">
      <img
        src={newsletterBgImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Newsletter Background"
      />
      {/* <div className="relative text-center z-10 p-4 bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Sign Up to Receive Updates <br /> on Our New
          <span className="text-[#9C5E29]"> Blings!</span>
        </h1>
        <form className="flex flex-col md:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 rounded-md text-black"
          />
          <button className="p-2 bg-[#9C5E29] text-white rounded-md hover:bg-[#7f481e] transition duration-300">
            Subscribe
          </button>
        </form>
      </div> */}

      <div className="text-white w-fit mx-auto my-[8%] text-center flex flex-col gap-6 items-center z-10">
        <h1 className="text-5xl font-light main--text leading-snug">
          Sign Up to Receive Updates on <br /> Our New
          <span className="text-[#FB7400]"> Blings!</span>
        </h1>
        {/*  */}
        <div className="w-[45%] flex gap-3">
          <div className="flex items-center justify-between bg-white bg-opacity-20 backdrop-blur-md shadow-md rounded-full p-2 w-[800px]">
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent border-none focus:outline-none px-3 py-1 text-white placeholder-white"
            />
          </div>
          <button className="px-5 py-2 inline-block bg-[#9C5E29] hover:bg-[#bd783c] transition-colors main--text rounded-md">
            Subcribe
          </button>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Newsletter;
