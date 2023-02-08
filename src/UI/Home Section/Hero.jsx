import React from "react";
import WritingText from "./WritingText";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-black">
      <div className="container mx-auto max-w-9xl px-6 py-12">
        <Navbar />
        <div className="flex h-auto flex-col justify-between lg:flex-row">
          <div className="mt-20 mb-4  min-h-fit p-4 text-base uppercase text-white md:m-32 md:mx-0 md:mr-auto md:min-h-full md:p-10 md:text-2xl">
            <WritingText />
          </div>
          <div className="mt-32 mb-4 min-h-fit max-w-2xl grow bg-cover p-4 text-base uppercase text-white opacity-75 md:m-2 md:mx-0 md:ml-auto md:p-2 md:text-2xl lg:min-h-full">
            <picture>
              <img
                src="https://media.elrond.com/nfts/asset/QmZgZj5TajS1fSJrX3x1QGPTP3skj6QLoFsaDJpFYt3AA8/4144.png"
                alt=""
                className=""
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
