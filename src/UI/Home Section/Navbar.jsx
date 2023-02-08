import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div>
      <nav className="flex items-center justify-between font-bold text-white">
        {/* <img src="images/logo.svg" alt="" /> */}
        <h1 className="duration-200 hover:text-2xl">Space Robots</h1>
        <div
          className={`font-alata hidden h-10 md:flex md:space-x-8 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="flex items-center justify-center outline-dashed">
            <a
              className="group transform text-center transition-all duration-300 ease-out hover:scale-x-100 hover:border-b-2 hover:border-pink-500"
              href="#asd"
            >
              Project
            </a>
          </div>

          <a className="group hover:text-pink-500" href="#x">
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
        className={`absolute top-0 bottom-0 left-0 min-h-screen w-full transform flex-col space-y-3 self-end  bg-slate-800 py-1 pt-40 pl-12 text-lg uppercase text-white transition-all duration-1000 ease-out ${
          isOpen ? "flex translate-x-0" : "hidden translate-x-full"
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
    </div>
  );
};

export default Navbar;
