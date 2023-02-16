import React from "react";
import WritingText from "./WritingText";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-hero bg-cover backdrop-blur-3xl">
      <div className="container z-10 mx-auto h-full max-w-[80%] px-6 py-12">
        <Navbar />
        <div className="flex h-full max-w-full flex-col justify-between md:h-[60%] lg:flex-row">
          <div className="mt-20 mb-4 flex min-h-[50%] max-w-6xl flex-col justify-between md:m-32 md:mx-0 md:min-h-full md:text-2xl">
            <h1 className="text-2xl font-medium text-white md:text-7xl md:font-bold">
              Explore the unkown with Space Robots
            </h1>
            <div className="mt-8 flex flex-col items-center md:h-20 md:flex-row">
              <button
                type="button"
                className="mr-4 inline-block h-16 w-40 rounded-lg bg-teal-300 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg md:h-20 md:min-w-[200px]"
              >
                Explore
              </button>
              <WritingText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
