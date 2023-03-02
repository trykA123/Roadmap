import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ members, className }) => {
  return (
    <div>
      <div
        className={`group ${className} flex transform cursor-pointer flex-col items-center rounded-t-md transition duration-300 md:max-w-[230px] md:hover:scale-110 md:hover:bg-slate-200`}
      >
        <img
          className="rounded-t-md object-cover md:max-w-[230px]"
          src={members.image}
          alt={members.name}
        />
        <div className="flex w-full flex-col items-center">
          <h1 className="mt-4 text-center text-2xl font-semibold uppercase text-gray-700 dark:text-white md:group-hover:text-black xl:text-left">
            {members.name}
          </h1>
          <p className="mt-2 text-center uppercase text-gray-500 dark:text-gray-300  md:group-hover:text-black">
            {members.role}{" "}
            <p className="text-center text-white opacity-0  md:text-left md:group-hover:text-black md:group-hover:opacity-100">
              {members.hobby}
            </p>
          </p>
          <div className="mt-3 flex items-center justify-center text-white  md:flex md:justify-start md:opacity-0 md:group-hover:text-black md:group-hover:opacity-100">
            <a href={members.twitter} target="_blank">
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
