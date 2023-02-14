import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineUserAdd,
  AiOutlineLogin,
} from "react-icons/ai";
import Button from "../UIComponents/Button";
import styled from "styled-components";
import Burger from "./Burger";
import { Navigate, useNavigate } from "react-router-dom";
import Logo from '../assests/logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 0px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
  
`;

const Container = styled.div`
  width: 100%;
  z-index: 20;
`;

const Wrapper = styled.section`
  margin: auto;
  width: 50%;
  text-align: center;
  align-items: center;
  

  .image {
    margin-left: auto;
    margin-right: auto;
    display: block;
    margin-top: 5px;
  }
`;

const Navbar = () => {
  return (
    <section className="flex justify-between bg-transparent lg:hidden items-center">
      <Container>
        <div className="flex mt-2">
          <div className="pl-3 flex space-x-4 mr-5 w-15 ml-4">
            <AiFillYoutube color="#762AE2" size={35} />
            <AiFillInstagram
              onClick={(e)=>{window.location.href = `https://www.instagram.com/ccetapratim/`}}
              color="#762AE2"
              size={35}
            />
          </div>
        </div>
      </Container>
      <div><Wrapper><img src={Logo} className="image" alt=''/></Wrapper></div>

      <Nav className="z-20">
        <div className="logo"></div>
        <Burger />
      </Nav>
    </section>
  );
};

export default Navbar;
