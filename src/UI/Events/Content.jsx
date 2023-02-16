import React from "react";
import "../../../src/index.css";
import { members } from "../../utils/constants";

const Content = ({ activeTab }) => {
  return (
    <div>
      <div className={activeTab === 1 ? "" : "hidden"}>
        <div className="relative flex items-center justify-center">
          <svg
            width="auto"
            height="1000"
            viewBox="0 0 536 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M263 832H11C5.47715 832 1 836.477 1 842V907"
              stroke="url(#paint0_linear_1_11)"
              stroke-linecap="round"
            />
            <path
              d="M265 533H525C530.523 533 535 537.477 535 543V608"
              stroke="url(#paint1_linear_1_11)"
              stroke-linecap="round"
            />
            <path
              d="M263 224H11C5.47715 224 1 228.477 1 234V299"
              stroke="url(#paint2_linear_1_11)"
              stroke-linecap="round"
            />
            <path d="M264 0L264 1000" stroke="url(#paint3_linear_1_11)" />
            <defs>
              <linearGradient
                id="paint0_linear_1_11"
                x1="267.923"
                y1="822.5"
                x2="133.835"
                y2="1025.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_11"
                x1="259.927"
                y1="523.5"
                x2="392.395"
                y2="729.908"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_1_11"
                x1="267.923"
                y1="214.5"
                x2="133.835"
                y2="417.241"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_1_11"
                x1="264.5"
                y1="1.48176e-08"
                x2="264.5"
                y2="1000"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" stop-opacity="0.1" />
                <stop offset="0.286458" stop-color="#EBFFB4" />
                <stop offset="0.671875" stop-color="#22D9BB" />
                <stop offset="1" stop-color="white" stop-opacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-80 left-[11%] flex h-48 flex-wrap items-center">
            <div className="grid h-full w-96 grid-rows-2 flex-col text-left">
              <p className="w-full font-sans text-base leading-4">
                Space Robots NFTs are part of an upgradable collection that
                allows collectors to enhance their digital assets over time.
                With each upgrade, the capabilities and abilities of the robot
                are expanded, providing new opportunities for exploration and
                discovery. As you progress through the
              </p>
              <div className="grid grid-cols-2 place-content-end">
                <h1 className="mr-2 text-center text-2xl">2022.01.01</h1>
                <button className="inline-block w-36 rounded-md bg-teal-300 px-6 py-2.5 text-xs font-medium uppercase shadow-md">
                  asd
                </button>
              </div>
            </div>
            <img src={members.tryka.image} className="block h-full w-40" />
          </div>

          <div>ds</div>
          <div>cs</div>
        </div>
      </div>
      <div className={activeTab === 2 ? "" : "hidden"}>
        <div className="h-screen w-[60%] bg-red-500">asdasd</div>
      </div>
      <div className={activeTab === 3 ? "" : "hidden"}>Tab 3 content</div>
      <div className={activeTab === 4 ? "" : "hidden"}>Tab 4 content</div>
    </div>
  );
};

export default Content;
