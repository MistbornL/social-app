import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Define a TypeScript interface for the user data
export interface UserData {
  name: string;
  profileUrl: string;
  avatarUrl: string;
  description: string;
}

interface SuggestedPeopleProps {
  people: UserData[];
}

export const SuggestedPeople: React.FC<SuggestedPeopleProps> = ({ people }) => {
  return (
    <div className="bg-secondary rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2 w-[370px]">
      <div className="flex justify-between text-black dark:text-white">
        <h3 className="font-bold text-base">People You Might Know</h3>
        <button type="button">
          <FontAwesomeIcon icon={faRefresh} color="white" size="lg" />
        </button>
      </div>

      <div className="space-y-4 capitalize text-xs font-normal mt-5 mb-2 text-gray-500 dark:text-white/80">
        {people.map((person, index) => (
          <div key={index} className="flex items-center gap-3">
            <a href={person.profileUrl}>
              <img
                src={person.avatarUrl}
                alt={person.name}
                className="bg-gray-200 rounded-full w-10 h-10"
              />
            </a>
            <div className="flex-1">
              <a href={person.profileUrl}>
                <h4 className="font-semibold text-sm text-black dark:text-white">
                  {person.name}
                </h4>
              </a>
              <div className="mt-0.5">{person.description}</div>
            </div>
            <button
              type="button"
              className="text-sm rounded-full py-1.5 px-4 font-semibold bg-slate-600"
            >
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
