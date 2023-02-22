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
import Modal from "../UIComponents/Modal";
import Login from "../UIComponents/Login";
import Signup from "../UIComponents/signup";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const [state, setState] = useState({
    login: false,
    signup: false,
    forgot: false,
  });
  const changeLoginModalState = () => {
    setState({
      login: false,
      signup: false,
      forgot: false,
    });
  };
  const changeSignupModalState = () => {
    setState({
      login: false,
      signup: false,
      forgot: false,
    });
  };
  
  return (
    <>
      {state.login && (
        <Modal>
          <Login changeLoginModalState={changeLoginModalState} />
        </Modal>
      )}
      {state.signup && (
        <Modal>
          <Signup changeSignupModalState={changeSignupModalState} />
        </Modal>
      )}

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
            <li><Button buttonText="Register" active icon={AiOutlineUserAdd}
                  clickHandler={(e) => {
                    setState({
                      login: false,
                      signup: true,
                      forgot: false,
                  }); }}/></li>
            <li><Button
              buttonText="Login"
              icon={AiOutlineLogin}
              clickHandler={(e) => {
                setState({
                  login: true,
                  signup: false,
                  forgot: false,
                });
              }}
            /></li>
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