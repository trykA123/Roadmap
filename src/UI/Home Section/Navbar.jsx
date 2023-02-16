import React from "react";
import { useState } from "react";

let menuState = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1, x: 100 },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="flex items-center justify-between font-bold text-white">
      <h1 className="md:text-4xl">Space Robots</h1>
      <div className="">
        <button
          type="button"
          className={`hamburger z-40 block focus:outline-none ${
            isOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      <div
        className={`absolute top-0 bottom-0 right-0 z-[2] min-h-screen w-96 flex-col space-y-3 self-end bg-black py-1 pt-40 pl-12 text-center text-3xl uppercase text-white lg:bg-transparent ${
          isOpen ? "flex origin-right overflow-hidden" : "hidden"
        }`}
      >
        <a className="hover:text-pink-500" href="#">
          Dapp
        </a>
        <a className="" href="#">
          Project
        </a>
        <a className="hover:text-pink-500" href="#Roadmap">
          Roadmap
        </a>
        <a className="hover:text-pink-500" href="#Team">
          Team
        </a>
        <a className="hover:text-pink-500" href="#">
          Blog
        </a>
      </div>
    </div>
  );
};

export default Navbar;
