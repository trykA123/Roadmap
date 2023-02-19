import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Events = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="h-[80vh] bg-black">
      <div className="h-full overflow-hidden pb-24 pt-12">
        <div className="mx-auto grid  h-full  grid-cols-[0.5fr_2fr] grid-rows-3 lg:max-w-[1600px]">
          {/* Tab index component */}
          <div className="row-span-3 hidden lg:col-start-1 lg:col-end-2 lg:mb-72 lg:flex lg:w-full lg:flex-col lg:items-center lg:justify-center lg:pr-12">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <Content activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Events;
