import React, { useState, useEffect } from "react";
import { tabs } from "../../utils/constants";

const Content = ({ activeTab }) => {
  const activeContent = tabs.find((tab) => tab.id === activeTab);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, [activeTab]);

  return (
    <div
      className={`col-start-2 col-end-3 row-span-3 grid grid-cols-[75%_1fr] ${
        showContent ? "opacity-100" : "opacity-0"
      } transition-property-opacity transition-opacity duration-500`}
    >
      {activeContent.imgURL && (
        <div className="row-start-1 row-end-3 mx-auto flex items-center justify-center md:max-w-2xl lg:w-full lg:max-w-none">
          <img
            src={activeContent.imgURL}
            alt=""
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
      )}
      <div className="row-start-3 px-12">
        <h3 className="mb-4 text-3xl text-white lg:pt-12">
          {activeContent.title}
        </h3>
        <p className="font-mono text-white">{activeContent.description}</p>
      </div>
      {activeContent.tag && (
        <div className="row-span-3 flex items-center justify-center lg:col-start-3">
          <h3 className="text-center text-5xl uppercase text-white lg:rotate-90 lg:transform">
            {activeContent.tag}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Content;
