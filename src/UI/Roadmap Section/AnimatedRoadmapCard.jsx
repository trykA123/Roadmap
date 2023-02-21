import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

let boxVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.5 },
  },
  hidden: { opacity: 0, scale: 1, x: 100 },
};

const AnimatedRoadmapCard = ({ info, cardTitle }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    boxVariant = {
      visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 1.5 },
      },
      hidden: { opacity: 0, scale: 0.5, x: 0 },
    };
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div>
      <motion.div
        className="mr-2 mb-4 rounded-md border-2 border-violet-700 p-2 text-base md:hover:border-yellow-300 lg:mr-4 lg:mb-6 lg:max-w-[75%] lg:rounded-lg lg:border-2 lg:border-teal-300 lg:p-5 lg:hover:border-violet-800"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h2 className="static mr-2 flex min-w-fit max-w-full justify-start py-2 px-1 font-orbitronBold text-base font-light text-white lg:py-4 lg:px-5 lg:text-4xl">
          {cardTitle}
        </h2>
        <p className="static mr-2 flex min-w-fit max-w-full justify-start py-2 px-1 font-mono text-base font-light text-white lg:py-4 lg:px-5 lg:text-xl">
          {info}
        </p>
      </motion.div>
    </div>
  );
};

export default AnimatedRoadmapCard;
