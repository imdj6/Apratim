import React, { useState } from "react";
import "./navbar.css";
import {
    AiOutlineLogin,
    AiOutlineUserAdd,
    AiFillSchedule,
  } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assests/logo.png";
import Button from "../UIComponents/Button";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
            <img className="h-24" src={Logo} alt="" />
        </div>

        <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Schedule</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li><Button buttonText="Register" active icon={AiOutlineUserAdd} /></li>
            <li><Button buttonText="Login" icon={AiOutlineLogin} /></li>
          </ul>

          {/* hamburget menu */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;