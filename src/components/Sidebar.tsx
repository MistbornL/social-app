import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { navItems } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-screen bg-secondary flex flex-col  max-w-[290px]">
      <h1 className="text-white text-3xl ml-5  mt-6 mb-5">Misty</h1>

      <nav>
        <ul className="flex flex-col ">
          {navItems.map((item, index) => (
            <li
              className="px-5 w-64 hover:bg-slate-700 transition-all duration-400 py-4 rounded-md"
              key={index}
            >
              <Link to={item.accessor}>
                <FontAwesomeIcon size="lg" icon={item.icon} color="white" />
                <span className="ml-4 text-text hover:text-textHover">
                  {item.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex px-4 py-2 justify-between">
          <div className="flex-gap-4">
            <div className="rounded-full w-10 h-10">
              <img src="a" alt="avatar" />
            </div>
            {/* <faArrowRight color="white" size="" /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
