import React from "react";
import Button from "../Events/Button";

const Pagination = ({ activeTab, setActiveTab }) => {
  <div className="flex h-full w-1/12 flex-col items-center justify-center">
    <Button isActive={activeTab === 1} onClick={() => setActiveTab(1)}>
      Proxima Centauri
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
  </div>;
};

export default Pagination;
