import React from "react";
import TeamMember from "./TeamMember";
import { members } from "../../utils/constants";

const Team = () => {
  return (
    <div>
      <section className="h-full bg-black">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-2xl font-bold uppercase text-red-500 dark:text-white lg:text-4xl">
            Our Team
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
            {Object.values(members).map((member, i) => {
              return <TeamMember members={member} key={i} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
