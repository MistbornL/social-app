import React, { useEffect, useState } from "react";
import { navItems } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [decodedToken, setDecodedToken] = useState<any | null>(null);
  const token = Cookies.get("_auth");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  console.log(decodedToken);
  useEffect(() => {
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setDecodedToken(decoded);
      } catch (error) {
        // Handle invalid token here, e.g., log an error or perform a redirect.
        console.error("Invalid token:", error);
      }
    }
  }, [token]);
  return (
    <div className="hidden fixed h-screen bg-secondary md:flex flex-col justify-between  w-[290px]">
      <div>
        <h1 className="text-white text-3xl ml-5  mt-6 mb-5">Misty</h1>{" "}
        <nav className="flex flex-col ">
          <ul className="flex flex-col">
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
        </nav>
      </div>

      <div className="mb-4 flex px-4 py-2 justify-between items-center">
        <div className="flex gap-4 items-center">
          <img
            className="rounded-full object-cover w-8 h-8"
            src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-7.jpg"
            alt="avatar"
          />
          <h4 className="text-white font-bold">{decodedToken?.username}</h4>
        </div>

        <FontAwesomeIcon
          className="hover:-rotate-90  transition-all"
          icon={faArrowRight}
          color="white"
          size="lg"
        />
      </div>
    </div>
  );
};

export default Sidebar;
