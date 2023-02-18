import React from "react";
import Button from "./Button";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <Button isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
        Proxima Centauri
      </Button>
      <Button isActive={activeTab === 2} onClick={() => setActiveTab(2)}>
        Proton Collider
      </Button>
      <Button isActive={activeTab === 3} onClick={() => setActiveTab(3)}>
        Benta Nostrale
      </Button>
      <Button isActive={activeTab === 4} onClick={() => setActiveTab(4)}>
        Lorem Ipsum
      </Button>
    </div>
  );
};

export default Sidebar;
