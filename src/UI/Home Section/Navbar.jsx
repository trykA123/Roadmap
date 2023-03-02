import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const hoverAnimation = (a) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        a.innerText = a.dataset.value
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return a.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");

        if (iteration >= a.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    const aElements = document.querySelectorAll("li a");
    aElements.forEach((a) => {
      a.addEventListener("mouseover", () => hoverAnimation(a));
      a.addEventListener("mouseleave", () => (a.innerText = a.dataset.value));
      a.innerText = a.dataset.value; // set default text
    });

    return () => {
      aElements.forEach((a) => {
        a.removeEventListener("mouseover", () => hoverAnimation(a));
        a.removeEventListener(
          "mouseleave",
          () => (a.innerText = a.dataset.value)
        );
      });
    };
  }, []);

  return (
    <div className="fixed z-30 hidden h-screen w-screen text-white md:block">
      <ul className="flex h-full w-32 cursor-pointer flex-col justify-center gap-10 pl-10">
        <li>
          <a href="#hero" data-value="Home">
            Home
          </a>
        </li>
        <li>
          <a href="#project" data-value="Project">
            Project
          </a>
        </li>
        <li>
          <a href="#market" data-value="Market">
            Market
          </a>
        </li>
        <li>
          <a href="#events" data-value="Events">
            Events
          </a>
        </li>
        <li>
          <a href="#roadmap" data-value="Roadmap">
            Roadmap
          </a>
        </li>
        <li>
          <a href="#team" data-value="Team">
            Team
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
