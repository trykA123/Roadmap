import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ExploreMarket = ({
  id,
  imgURL,
  title,
  index,
  active,
  handleClick,
  pDescription,
  buttonLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
      } ease-out-flex flex min-w-[170px] cursor-pointer items-center justify-center transition-[flex] duration-[0.7s] lg:h-[800px]`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgURL}
        alt="world-2"
        className="absolute h-full w-full rounded-md object-cover md:rounded-3xl"
      />
      {active !== id ? (
        <h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 flex w-full justify-between bg-[rgba(0,0,0,0.5)] px-4 pt-2 md:flex-col md:justify-start md:rounded-b-3xl md:p-8">
          <button className="group relative mb-2 mr-2 inline-flex w-24 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-green-400 to-blue-600 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-green-200 group-hover:from-green-400 group-hover:to-blue-600 dark:text-white dark:focus:ring-green-800">
            <a
              href={buttonLink}
              target="_blank"
              className="relative rounded-md bg-white px-8 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900"
            >
              Buy
            </a>
          </button>
          <p className="py-3 text-sm text-white md:text-base md:font-normal md:uppercase md:leading-5">
            {pDescription}
          </p>
          <h2 className="hidden text-sm font-semibold text-white md:mt-6 md:block md:text-4xl">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreMarket;
