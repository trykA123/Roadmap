import React from "react";
import AnimatedRoadmapCard from "./AnimatedRoadmapCard";
import { titles } from "./utils/constants";

const Box = ({ title, first, second, third, forth, fifth }) => {
  console.log(titles);
  return (
    <div>
      <div className="z-2 mt-1 grid auto-cols-fr grid-cols-[1fr_4vw_1fr] items-stretch gap-0 py-20 lg:grid-cols-[1fr_8vw_1fr]">
        <div className="sticky top-[35vh] text-right">
          <div className="leading-2 sticky top-[35vh] flex flex-col items-end justify-around lg:leading-4">
            <h3 className="sticky mt-0 flex h-12 flex-col justify-end pt-3 text-xl font-light uppercase text-white lg:text-4xl lg:font-bold">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex"></div>
        <div className="overflox-visible mt-0 object-fill">
          <AnimatedRoadmapCard info={first} />
          <AnimatedRoadmapCard info={second} />
          <AnimatedRoadmapCard info={third} />
          <AnimatedRoadmapCard info={forth} />
          {title === titles.postLaunch && <AnimatedRoadmapCard info={fifth} />}
        </div>
      </div>
    </div>
  );
};

export default Box;
