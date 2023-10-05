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
  faMailBulk,
  faDownload,
  faMobile,
  faCamera,
  faMessage,
  faShield,
  faImage,
  faVideo,
  faBookmark,
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

export const manageItems = [
  {
    question: "Who can follow me?",
    answers: ["Everyone", "The People I Follow", "No body"],
  },
  {
    question: "Who can message me ?",
    answers: ["Everyone", "The People I Know", "No body"],
  },
  {
    question: "Status",
    answers: ["Yes", "No"],
  },
  {
    question: "Show my activities ?",
    answers: ["Public", "Hide"],
  },
];

export const alertItems = [
  {
    icon: faMailBulk,
    color: "green",

    rotate: 0,
    header: "Email Notifications",
    paragraph:
      "You can receive notifications about important updates and content directly to your email inbox.",
  },
  {
    icon: faDownload,
    color: "purple",

    rotate: 180,
    header: "Web Notifications",
    paragraph:
      "You can receive notifications through your notifications center",
  },
  {
    icon: faMobile,
    color: "emerald",
    rotate: 0,
    header: "Phone Notifications",
    paragraph:
      "You can receive notifications on your phone, so you can stay up-to-date even when you’re on the go",
  },
];

export const modalItems = [
  {
    icon: faCamera,
    head: "Stories",
    color: "blue",
    desc: "Post moments your everyday life that disappear after 24 hours",
  },

  {
    icon: faMessage,
    head: "Messages",
    color: "orange",
    desc: "Send photos, videos, and messages privately to your friends or groups",
  },

  {
    icon: faCompass,
    head: "Explore",
    color: "purple",
    desc: "Discover content and creators based on their interests",
  },

  {
    icon: faShield,
    head: "Privacy",
    color: "red",
    desc: "Make your account visible only to people who follow you",
  },

  {
    icon: faImage,
    head: "Images",
    color: "cyan",
    desc: "You can upload Unlimited photes and share with your friends",
  },

  {
    icon: faVideo,
    head: "Shorts",
    color: "pink",
    desc: "Create and share short, entertaining videos with music, filters, and effects",
  },

  {
    icon: faBookmark,
    head: "Bookmark",
    color: "green",
    desc: "Create collections of saved posts based on themes, topics, or categories.",
  },

  {
    icon: faMessage,
    head: "Shopping",
    color: "blue",
    desc: "Browse and buy products from your favorite brands and creators",
  },
];
