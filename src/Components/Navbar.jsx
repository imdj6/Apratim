import React from 'react';
import { AiFillYoutube, AiFillInstagram ,AiOutlineUserAdd,AiOutlineLogin} from 'react-icons/ai'
import Button from '../UIComponents/Button'
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`

const Container = styled.div`
  height: 80px;
  background-color: white;
  position: fixed;
  width: 100%;
  z-index: 20;
  
`


const Navbar = () => {
  return (
    <section className='flex justify-between lg:hidden bg-[#fcfcfc] pb-5 pt-2 items-center'>
        <Container>
            <div className='flex mt-5'>
                <div className='pl-3 flex space-x-1 mr-3'>
                    <AiFillYoutube color='#762AE2' size={40} />
                    <AiFillInstagram color='#762AE2' size={40}/>
                </div>
                <div className='flex space-x-5 mr-8'>
                    <Button buttonText="Register" active icon={AiOutlineUserAdd} />
                    <Button buttonText="Login" icon={AiOutlineLogin}/>
                </div>
            </div>
        </Container>
          
        <Nav className='z-20'>
            <div className="logo">
            </div>
            <Burger />
        </Nav>
    </section> 
  )
}

export default Navbar