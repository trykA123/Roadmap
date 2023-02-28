import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const [ref, inView] = useInView({});

  return (
    <section className="h-screen bg-black md:py-72" id="Project">
      <div className="flex h-full w-full items-center justify-center md:mx-auto">
        <motion.div
          className="relative top-0 z-10"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <img
            src="/src/assets/ProjectRoboBackground.png"
            alt=""
            className="h-full w-full object-contain"
          />
          <motion.div
            className="absolute -top-[34%] -right-36 z-20"
            ref={ref}
            initial={{ opacity: 0, translateX: 400 }}
            animate={inView ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 1.3 }}
          >
            <img
              src="/src/assets/Project.png"
              alt=""
              className="h-full w-full object-contain"
            />
          </motion.div>
          <motion.div
            className="absolute top-1/4 left-[5%] z-20 w-[40%]"
            ref={ref}
            initial={{ opacity: 0, translateX: -300 }}
            animate={inView ? { opacity: 1, translateX: 0 } : {}}
            transition={{ duration: 1.3 }}
          >
            <p className="text-base text-white">
              Space Robots NFTs are part of an upgradable collection that allows
              collectors to enhance their digital assets over time. With each
              upgrade, the capabilities and abilities of the robot are expanded,
              providing new opportunities for exploration and discovery. As you
              progress through the collection, your Space Robot NFT becomes more
              advanced and valuable, reflecting the increasing knowledge and
              technological capabilities of our species. By owning a Space
              Robots NFT, you're not just collecting a unique digital asset, but
              also investing in the future of space exploration.
            </p>
          </motion.div>
          <h1 className="absolute top-0 left-[5%] z-20 text-base text-white md:text-7xl">
            Project
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
