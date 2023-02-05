import React from "react";
import Div from "./Div";
import { titles } from "./utils/constants";

const Box = ({ title, first, second, third, forth, fifth }) => {
  console.log(titles);
  return (
    <div>
      <div className="z-2 mt-1 grid auto-cols-fr grid-cols-[1fr_8vw_1fr] items-stretch gap-0 py-20">
        <div className="sticky top-[25vh] text-right">
          <div className="sticky top-[25vh] flex flex-col items-end justify-around leading-4">
            <h3 className="sticky mt-0 flex h-12 flex-col justify-end pt-3 text-4xl font-bold uppercase text-white">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex text-white"></div>
        <div className="overflox-visible mt-0 object-fill">
          <Div info={first} />
          <Div info={second} />
          <Div info={third} />
          <Div info={forth} />
          {title === titles.postLaunch && <Div info={fifth} />}
        </div>
      </div>
    </div>
  );
};

export default Box;
