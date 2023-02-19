import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ members, className }) => {
  return (
    <div>
      <div
        className={`group ${className} flex transform cursor-pointer flex-col items-center p-10 transition-colors duration-300`}
      >
        <img
          className="h-48 w-48 object-cover duration-500 md:group-hover:h-64 md:group-hover:w-64"
          src={members.image}
          alt={members.name}
        />
        <div>
          <h1 className="mt-4 text-center text-2xl font-semibold uppercase text-gray-700 dark:text-white md:group-hover:text-white lg:text-left">
            {members.name}
          </h1>
          <p className="mt-2 text-center uppercase  text-gray-500 dark:text-gray-300 md:group-hover:text-gray-300 lg:text-left">
            {members.role}{" "}
            <p className="text-center text-white opacity-0 duration-500 md:group-hover:opacity-100 lg:text-left">
              {members.hobby}
            </p>
          </p>
          <div className="mt-3 flex justify-center text-white duration-500 md:group-hover:opacity-100 lg:flex lg:justify-start lg:opacity-0">
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
