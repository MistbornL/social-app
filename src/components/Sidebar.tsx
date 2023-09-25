import React, { useEffect, useState } from "react";
import { navItems } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

const Sidebar = () => {
  const [decodedToken, setDecodedToken] = useState<any | null>(null);
  const token = Cookies.get("_auth");

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
  }, []);
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

      <div className="flex px-4 py-2 justify-between">
        <div className="">
          <div className="flex items-center gap-4">
            <div className="rounded-full w-10 h-10 flex gap-4">
              <img src="" alt="avatar" />
            </div>
            {/* <h1 className="text-white text-md  font-bold ">
              {decodedToken.username}
            </h1> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
