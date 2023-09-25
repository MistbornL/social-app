import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Friend {
  id: number;
  imageUrl: string;
}

interface OnlineFriendsProps {
  friendData: Friend[];
}

export const OnlineFriends: React.FC<OnlineFriendsProps> = ({ friendData }) => {
  return (
    <div className="mt-4 bg-secondary rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
      <div className="flex justify-between text-black dark:text-white">
        <h3 className="text-white font-bold text-base">Online Friends</h3>
        <button type="button">
          <FontAwesomeIcon icon={faRefresh} color="white" />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-3 mt-4">
        {friendData.map((friend) => (
          <a key={friend.id} href="profile.html">
            <div className="w-10 h-10 relative">
              <img
                src={friend.imageUrl}
                className="w-full h-full absolute inset-0 rounded-full"
              />
              <div className="absolute bottom-0 right-0 m-0.5 bg-green-500 rounded-full w-2 h-2"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OnlineFriends;
