import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 1, x: 300 },
};

const Div = ({ info }) => {
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
        className="mb-6 rounded-lg border-2 border-teal-300 p-5"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <h6 className="static mr-0 flex min-w-fit max-w-full justify-start py-4 px-5 text-base font-light text-white">
          {info}
        </h6>
      </motion.div>
    </div>
  );
};

export default Div;
