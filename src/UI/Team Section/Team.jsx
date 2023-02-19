import React from "react";
import TeamMember from "./TeamMember";
import { members } from "../../utils/constants";

const Team = () => {
  return (
    <div>
      <section className="h-[1200px] bg-slate-800" id="Team">
        <div className="container mx-auto max-w-[90%] px-6 py-10">
          <h1 className="text-center text-2xl font-bold uppercase text-white lg:text-4xl">
            Our Team
          </h1>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:mt-16 xl:grid-cols-7">
            {Object.values(members).map((member, i) => {
              if (i % 2 === 0) {
                return <TeamMember members={member} key={i} />;
              } else {
                return (
                  <TeamMember members={member} key={i} className={"mt-12"} />
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
