import React, { useEffect, useState } from "react";
import { navItems } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import {
  faArrowRight,
  faPerson,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useSignOut } from "react-auth-kit";
import logo from "../assets/logo-icon.png";
import { Notification } from "./Notification";
type SideProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SideProps> = ({ setIsOpen }) => {
  const [decodedToken, setDecodedToken] = useState<any | null>(null);
  const token = Cookies.get("_auth");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);

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

  // Track the timer for hiding the profile div
  let hideProfileTimer: any = null;

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Clear the timer if the mouse enters before 2 seconds
    if (hideProfileTimer) {
      clearTimeout(hideProfileTimer);
      hideProfileTimer = null;
    }
  };

  const handleMouseLeave = () => {
    // Set a timer to hide the profile div after 2 seconds
    hideProfileTimer = setTimeout(() => {
      setIsHovered(false);
    }, 1000);
  };

  return (
    <div>
      <div
        className={` fixed h-screen ${
          isNotificationOpen
            ? "w-[70px] shadow-slate-500 shadow-md"
            : "w-[290px]"
        } bg-secondary md:flex flex-col justify-between`}
      >
        <div>
          {!isNotificationOpen ? (
            <h1 className="text-white text-3xl ml-5  mt-6 mb-5">Misty</h1>
          ) : (
            <div className="ml-5  mt-6 mb-5">
              <img
                className="object-cover w-7 cursor-pointer"
                src={logo}
                alt="logo"
              />
            </div>
          )}
          <nav className="flex flex-col">
            <ul className="flex flex-col">
              {navItems.map((item, index) => (
                <li
                  className={`px-5 w-full hover:bg-slate-700 transition-all duration-400 py-4 rounded-md`}
                  key={index}
                >
                  {item.text === "People" ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => setIsOpen(true)}
                    >
                      <FontAwesomeIcon
                        size="lg"
                        icon={item.icon}
                        color="white"
                      />
                      <span className="ml-4 text-gray-300 ">
                        {/* Hide the text when isNotificationOpen is true */}
                        {!isNotificationOpen && item.text}
                      </span>
                    </div>
                  ) : item.text === "Notifications" ? (
                    <div
                      className="cursor-pointer"
                      onClick={() => setIsNotificationOpen(true)}
                    >
                      <FontAwesomeIcon
                        size="lg"
                        icon={item.icon}
                        color="white"
                      />
                      <span className="ml-4 text-gray-300 ">
                        {/* Hide the text when isNotificationOpen is true */}
                        {!isNotificationOpen && item.text}
                      </span>
                    </div>
                  ) : (
                    <Link to={item.accessor}>
                      <div>
                        <FontAwesomeIcon
                          size="lg"
                          icon={item.icon}
                          color="white"
                        />
                        <span className="ml-4 text-gray-300 ">
                          {/* Hide the text when isNotificationOpen is true */}
                          {!isNotificationOpen && item.text}
                        </span>
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* profile section */}
        <div className="p-4 cursor-pointer">
          {isHovered && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className=" outline outline-1 outline-gray-700 w-[260px] flex absolute bottom-20 flex-col bg-secondary rounded-lg"
            >
              <div className="w-full h-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-700" />
              <div className="p-4 text-xs font-medium">
                <a href="profile.html">
                  <img
                    src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-3.jpg"
                    className="w-8 h-8 rounded-full"
                    alt=""
                  />
                  <div className="mt-2 space-y-0.5">
                    <div className="text-base font-semibold text-white">
                      {" "}
                      Monroe Parker{" "}
                    </div>
                    <div className=" dark:text-white/80"> @monroe </div>
                  </div>
                </a>
                <div className="mt-3 flex gap-3.5">
                  <div>
                    <a href="profile.html">
                      <strong className="text-white">620K</strong>{" "}
                      <span className="text-gray-400 dark:text-white/80 ml-1">
                        Following
                      </span>
                    </a>
                  </div>
                  <div>
                    <a href="profile.html">
                      <strong className="text-white">38k</strong>{" "}
                      <span className="text-gray-400 dark:text-white/80 ml-1">
                        Followers
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white w-full h-[1px] mb-2" />
              <div className="flex flex-col px-2">
                <div
                  onClick={() => navigate("/settings")}
                  className="hover:bg-slate-700 rounded-lg cursor-pointer flex gap-4 p-4"
                >
                  <FontAwesomeIcon icon={faPerson} size="lg" color="white" />
                  <h4 className="text-white text-sm">Profile</h4>
                </div>

                <div
                  onClick={() => signOut()}
                  className="hover:bg-slate-700 cursor-pointer flex gap-4 p-4"
                >
                  <FontAwesomeIcon icon={faSignOut} size="lg" color="white" />
                  <h4 className="text-white text-sm">Log Out</h4>
                </div>
              </div>
            </div>
          )}
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative mb-4 flex  justify-between items-center"
          >
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full object-cover w-8 h-8"
                src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-7.jpg"
                alt="avatar"
              />
              {!isNotificationOpen && (
                <h4 className="text-white font-bold">
                  {decodedToken?.username}
                </h4>
              )}
            </div>
            {!isNotificationOpen && (
              <FontAwesomeIcon
                className={`${
                  isHovered ? "-rotate-90 transition-all" : "transition-all"
                }`}
                icon={faArrowRight}
                style={{ color: "white" }}
                size="lg"
              />
            )}
          </div>
        </div>
      </div>

      {isNotificationOpen && (
        <Notification setIsNotificationOpen={setIsNotificationOpen} />
      )}
    </div>
  );
};

export default Sidebar;
