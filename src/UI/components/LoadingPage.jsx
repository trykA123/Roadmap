import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const LoadingPage = () => {
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTranslateY(-100); // translate the component 100% outside the screen
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const styles = {
    transform: `translateY(${translateY}%)`,
    transition: "transform 1s ease-in-out", // add a transition effect for smoother movement
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black"
      style={styles}
    >
      <div className="text-white">
        <p className="drop-shadow-5xl mb-8 text-2xl xl:text-8xl">
          <TypeAnimation
            sequence={[
              ".", // Types 'One'
              500, // Waits 1s
              "..", // Deletes 'One' and types 'Two'
              500, // Waits 2s
              "...", // Types 'Three' without deleting 'Two'
              1000,
              "...initializing",
            ]}
            wrapper="div"
            cursor={true}
            repeat={0}
          />
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingPage;
