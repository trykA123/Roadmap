import React from "react";

const Button = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`p-3 text-lg text-white ${
        isActive ? "scale-150 text-xl text-teal-300 duration-700" : ""
      } mb-2 rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
