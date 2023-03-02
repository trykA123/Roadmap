import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TeamMember from "./TeamMember";
import { members } from "../../utils/constants";

const Team = () => {
  const [ref, inView] = useInView({});
  const memberRefs = useRef([]);

  return (
    <div>
      <section className="min-h-screen overflow-hidden bg-black" id="team">
        <div className="container mx-auto max-w-[70%] px-6 py-12 lg:py-96">
          <motion.h1
            className="text-center text-2xl font-bold uppercase text-white lg:pb-48 lg:text-7xl"
            ref={ref}
            initial={{ opacity: 0, translateX: 200 }}
            animate={
              inView
                ? {
                    opacity: 1,
                    translateX: 0,
                  }
                : {}
            }
            transition={{ duration: 0.8 }}
          >
            Our Team
          </motion.h1>
          <motion.div className="mt-8 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-6 xl:grid-cols-7">
            {Object.values(members).map((member, i) => (
              <motion.div
                key={i}
                ref={(el) => (memberRefs.current[i] = el)}
                initial={{ opacity: 0, translateX: -200 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        translateX: 0,
                      }
                    : {}
                }
                transition={{ duration: 1.2, delay: i * 0.2 }}
              >
                {i % 2 === 0 ? (
                  <TeamMember members={member} />
                ) : (
                  <TeamMember members={member} className={"xl:mt-32"} />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
