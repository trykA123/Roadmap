import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TitleAnimation = ({ title }) => {
  let titleVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 1, x: 200 },
  };

  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    titleVariant = {
      visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1.5 } },
      hidden: { opacity: 0, scale: 0.5, x: 0 },
    };
  }
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
    <motion.h1
      className="py-12 text-center text-3xl md:mb-20 md:py-24 md:text-7xl"
      variants={titleVariant}
      animate={control}
      initial="hidden"
      ref={ref}
    >
      {title}
    </motion.h1>
  );
};

export default TitleAnimation;
