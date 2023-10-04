import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faCompass,
  faEnvelope,
  faFilm,
  faBell,
  faShoppingCart,
  faUsers,
  faPencilAlt,
  faPuzzlePiece,
  faUser,
  faPerson,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  { icon: faHome, text: "Home", accessor: "/" },
  { icon: faSearch, text: "Search", accessor: "/search" },
  { icon: faCompass, text: "Explore", accessor: "/explore" },
  { icon: faEnvelope, text: "Messages", accessor: "/messages" },
  { icon: faFilm, text: "Reels", accessor: "/reels" },
  { icon: faBell, text: "Notifications", accessor: "/notifications" },
  { icon: faShoppingCart, text: "Shop", accessor: "/shop" },
  { icon: faUsers, text: "People", accessor: "/people" },
  { icon: faPencilAlt, text: "Create", accessor: "/create" },
  { icon: faPuzzlePiece, text: "Components", accessor: "/components" },
];

export const profileItems = [
  { icon: faPerson, text: "Profile", accessor: "/profile" },
  { icon: faSignOut, text: "Log Out", accessor: "/" },
];

export const settings = [
  "General",
  "Social Links",
  "Password",
  "Notifications",
  "Manage",
  "Privacy",
  "Alerts",
];

export const notifications = [
  "Someone send me message",
  "Someone liked my photo",
  "Someone shared on my photo",
  "Someone followed me",
  "Someone liked my posts",
  "Someone mentioned me",
  "Someone sent me follow requset",
];
