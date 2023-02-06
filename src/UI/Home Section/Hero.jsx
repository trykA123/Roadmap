import React from "react";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="h-screen w-full bg-slate-800">
        {/* Hero container */}
        <div className="container mx-auto max-w-7xl px-6 py-12">
          {/* Menu/Logo */}
          <nav className="flex items-center justify-between font-bold text-white">
            <img src="image/logo.svg" alt="" />
            {/* Menu */}
            <div className="font-alata hidden h-10 md:flex md:space-x-8">
              <div className="group">
                <a href="#">Dapp</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Project</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#Roadmap">Roadmap</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Team</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="#">Blog</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>
            {/* Hamburger button */}
          </nav>
          {/* Mobile menu */}
        </div>
      </section>
    </div>
  );
};

export default Hero;
