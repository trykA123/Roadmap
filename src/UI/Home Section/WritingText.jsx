import React, { useState, useEffect } from "react";

const WritingText = () => {
  const [text, setText] = useState("");
  const string =
    "//: Upgradable NFT collection of 7777 randomly assembled 3D Robots";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(string.slice(0, index));
      index++;
      if (index > string.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return <p className="min-h-[100px]">{text}</p>;
};

export default WritingText;
