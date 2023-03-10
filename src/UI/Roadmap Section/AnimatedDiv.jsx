import React from "react";
import AnimatedRoadmapCard from "./AnimatedRoadmapCard";
import { titles } from "../../utils/constants";

const Box = ({ title, first, second, third, forth }) => {
  return (
    <div className="w-[80%]">
      <div className="z-2 mt-1 grid grid-cols-[1fr_4vw_1fr] items-stretch gap-0 py-20 md:grid-cols-[1fr_4vw_1fr] lg:grid-cols-[1fr_8vw_1fr]">
        <div className="sticky top-[35vh] text-right">
          <div className="leading-2 sticky top-[35vh] flex flex-col items-end justify-around xl:leading-4">
            <h3 className="sticky mt-0 flex h-12 flex-col justify-end pt-3 text-xl font-light uppercase text-white lg:font-bold xl:text-4xl">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex"></div>
        <div className="overflox-visible mt-0">
          <AnimatedRoadmapCard info={first.info} cardTitle={first.title} />
          <AnimatedRoadmapCard info={second.info} cardTitle={second.title} />
          <AnimatedRoadmapCard info={third.info} cardTitle={third.title} />
          {title !== titles.Q4 && (
            <AnimatedRoadmapCard info={forth.info} cardTitle={forth.title} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Box;
