import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 1, x: 100 },
};

const AnimatedRoadmapCard = ({ info }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
        className="mr-2 mb-4 rounded-md border-2 border-violet-700 p-2 text-base hover:border-yellow-300 lg:mr-4 lg:mb-6 lg:w-[800px] lg:rounded-lg lg:border-2 lg:border-teal-300 lg:p-5 lg:hover:border-violet-800"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h6 className="static mr-2 flex min-w-fit max-w-full justify-start py-2 px-1 text-base font-light text-white lg:py-4 lg:px-5 lg:text-2xl">
          {info}
        </h6>
      </motion.div>
    </div>
  );
};

export default AnimatedRoadmapCard;
