import React from "react";
import { useState } from "react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <section id="hero" className="h-screen bg-black">
      <div className="container mx-auto max-w-9xl px-6 py-12">
        <nav className="flex items-center justify-between font-bold text-white">
          {/* <img src="images/logo.svg" alt="" /> */}
          <h1 className="duration-200 hover:text-2xl">Space Robots</h1>
          <div
            className={`font-alata hidden h-10 md:flex md:space-x-8 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <a className="group hover:text-pink-500" href="#">
              Project
            </a>
            <a
              className="group scroll-smooth hover:text-pink-500"
              href="#Roadmap"
            >
              Roadmap
            </a>
            <a className="group hover:text-pink-500" href="#">
              Team
            </a>
            <a className="group hover:text-pink-500" href="#">
              Products
            </a>
            <a className="group hover:text-pink-500" href="#">
              Support
            </a>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className={`hamburger z-40 block focus:outline-none md:hidden ${
                isOpen ? "active" : ""
              }`}
              onClick={toggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>
        <div
          id="menu"
          className={`absolute top-0 bottom-0 left-0 min-h-screen w-full flex-col space-y-3 self-end bg-slate-800  py-1 pt-40 pl-12 text-lg uppercase text-white duration-300 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <a className="hover:text-pink-500" href="#">
            Project
          </a>
          <a className="hover:text-pink-500" href="#">
            Roadmap
          </a>
          <a className="hover:text-pink-500" href="#">
            Team
          </a>
          <a className="hover:text-pink-500" href="#">
            Products
          </a>
          <a className="hover:text-pink-500" href="#">
            Support
          </a>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div
            className="mx-auto mt-32 mb-4 min-h-full max-w-2xl grow border-2 bg-contain p-4 text-base uppercase text-white md:m-2 md:mx-0 md:p-2 md:text-2xl"
            style={{
              backgroundImage: `url(${"https://media.elrond.com/nfts/asset/QmZgZj5TajS1fSJrX3x1QGPTP3skj6QLoFsaDJpFYt3AA8/4144.png"})`,
            }}
          ></div>
          <div className="mx-auto mt-4 mb-4 max-w-2xl border-2 p-4 text-base uppercase text-white md:m-32 md:mx-0 md:p-10 md:text-2xl">
            //: Upgradable NFT collection of 7777 randomly assembled 3D Robots
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
