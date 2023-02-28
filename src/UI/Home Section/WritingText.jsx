import React, { useState, useEffect } from "react";

const WritingText = () => {
  const [text, setText] = useState("");
  const string =
    "Space Robots NFTs are unique digital collectibles that represent a robotic explorer in the vast universe. These NFTs offer a glimpse into the future of space exploration, where robots are sent to faraway planets to gather data and unlock the secrets of the cosmos.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(string.slice(0, index));
      index++;
      if (index > string.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="hidden leading-3 text-white md:block md:h-16 md:max-w-2xl md:text-base">
      {text}
    </p>
  );
};

export default WritingText;
