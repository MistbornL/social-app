import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Trend {
  title: string;
  posts: string;
}

interface TrendsProps {
  trendsData: Trend[];
}

const Trends: React.FC<TrendsProps> = ({ trendsData }) => {
  return (
    <div className="mt-4 bg-secondary rounded-xl shadow-sm p-5 px-6 border1 dark:bg-dark2">
      <div className="flex justify-between text-black dark:text-white">
        <h3 className="font-bold text-base text-white">Trends for you</h3>
        <button type="button">
          <FontAwesomeIcon icon={faRefresh} color="white" />
        </button>
      </div>

      <div className="space-y-3.5 capitalize text-xs font-normal mt-5 mb-2 text-gray-600 dark:text-white/80">
        {trendsData.map((trend, index) => (
          <a key={index} href="#">
            <div className="flex items-center gap-3 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 -mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                ></path>
              </svg>
              <div className="flex flex-col ">
                <h4 className="font-semibold text-black dark:text-white text-sm">
                  {trend.title}
                </h4>
                <h5 className="mt-0.5">{trend.posts}</h5>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Trends;
