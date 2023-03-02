"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import ExploreMarket from "./ExploreMarket";
import { explore } from "../../utils/constants";
import TitleAnimation from "../components/TitleAnimation";

const Market = () => {
  const [active, setActive] = useState("slide-2");
  return (
    <section
      id="market"
      className="relative block h-full overflow-hidden bg-black pb-72 text-white"
    >
      <TitleAnimation title="Market" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="mx-auto flex w-[100%] flex-col lg:w-[70%]"
      >
        <div className="lg:maw-h-[60vh] lg:px-auto mt-[50px] flex min-h-[50vh] flex-col gap-5 md:max-h-[60vh] lg:flex-row">
          {explore.map((slide, index) => (
            <ExploreMarket
              key={slide.id}
              {...slide}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Market;
