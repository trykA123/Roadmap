import React from "react";
import Button from "./Button";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex h-screen w-1/12 flex-col items-center justify-center">
      <Button isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
        Q1
      </Button>
      <Button isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
        Q2
      </Button>
      <Button isActive={activeTab === 3} onClick={() => setActiveTab(3)}>
        Q3
      </Button>
      <Button isActive={activeTab === 4} onClick={() => setActiveTab(4)}>
        Q4
      </Button>
    </div>
  );
};

export default Sidebar;
