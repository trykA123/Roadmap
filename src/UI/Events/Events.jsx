import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Events = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section className="flex h-full flex-col bg-black pr-[116px] pb-48 text-white">
      <div className="p-4 text-center text-7xl font-bold">Events</div>
      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="m-6 h-screen flex-1 p-4">
          <Content activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Events;
