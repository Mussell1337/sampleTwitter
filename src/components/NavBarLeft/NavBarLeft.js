import React from "react";
import "./NavBarLeft.css";
import { FaTwitter } from "react-icons/fa";
import {
  BiHash,
  BiHomeCircle,
  BiMessageSquareDetail,
  BiBookmark,
} from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiFileList2Line, RiContactsFill } from "react-icons/ri";
import { CgMoreO, CgMoreAlt } from "react-icons/cg";

const NavBarLeft = () => {
  return (
    <div id="Left">
      <div id="TwitterBox">
        <FaTwitter id="TwitterLogo" />
      </div>
      <button id="box">
        <BiHomeCircle id="icon" />
        <p id="text-navbar-left">Home</p>
      </button>
      <button id="box">
        <BiHash id="icon" />
        <p id="text-navbar-left">Explore</p>
      </button>
      <button id="box">
        <IoNotificationsOutline id="icon" />
        <p id="text-navbar-left">notifications</p>
      </button>
      <button id="box">
        <BiMessageSquareDetail id="icon" />
        <p id="text-navbar-left">Message</p>
      </button>
      <button id="box">
        <BiBookmark id="icon" />
        <p id="text-navbar-left">Bookmarks</p>
      </button>
      <button id="box">
        <RiFileList2Line id="icon" />
        <p id="text-navbar-left">Lists</p>
      </button>
      <button id="box">
        <RiContactsFill id="icon" />
        <p id="text-navbar-left" className="bold">Profile</p>
      </button>
      <button id="box">
        <CgMoreO id="icon" />
        <p id="text-navbar-left">More</p>
      </button>

      <button id="Tweet">Tweet</button>
      <div id="user">
        <img
          src="https://avatarfiles.alphacoders.com/311/311487.jpg"
          alt=""
          id="user-img"
        />
        <div id="box-user-names">
          <p id="name">Parassat</p>
          <p id="user-name">@Mussell228</p>
        </div>
        <CgMoreAlt id="cg" />
      </div>
    </div>
  );
};

export default NavBarLeft;
