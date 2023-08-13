import React from "react";
import HeroImage from "../images/heroImage.jpg";
const Hero = () => {
  return (
    <div
      className="relative md:h-screen h-[80vh] bg-cover bg-center -z-10" id="homeSection"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
      {/* <Navbar /> */}
      <div className="absolute md:top-20 top-10 left-0 right-0 bottom-0 flex flex-col items-center justify-center md:px-20 px-8">
        <h1 className="text-white text-4xl text-center  md:text-6xl font-bold md:-mt-20">
          We Care about Your{" "}
          <span className="text-[#83a2f7]">Dental Health</span>
        </h1>
        <h1 className="text-white md:text-4xl font-bold text-center mt-5">
          If you are in need of high-quality, professional and friendly dental
          care, look no further than our clinic.
        </h1>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-8"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
