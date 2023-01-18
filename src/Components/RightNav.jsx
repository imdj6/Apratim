import React from 'react';
import styled from 'styled-components';
import { AiOutlineLogin, AiOutlineUserAdd, AiFillSchedule } from 'react-icons/ai';
import Button from '../UIComponents/Button';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0px;
  padding-top: 0px;

  li {
    padding: 18px;
    color: black;
    font-size: 22px;
  }

  @media (max-width: 1350px){
    background-color: white;
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    margin-top: 7rem;
    box-shadow: 0px 2px 4px #d4d4ff;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 300px;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;
    height: 100%;
  }

  li {
    margin-left: 20px;
    border-bottom: 2px solid #EEEDE7;
    transition: 0.5s;
    width: 220px;
  }

  li:hover {
    margin-left: 40px;
    transition: 0.5s;
    transform: scale(1.1);
  }

.button {
    display: inline-flex;
    font-size: 22px;
    font-weight: 500;
    padding: 18px;
    padding-bottom: 44px;
    align-items: center;
    justify-content: center;
    width: auto;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out; 
    width: 252px;
}

.button:hover {
    transform: scale(0.95);
    box-shadow: none;
}

.icon {
  margin-left: 0px;
  margin-right: 15px;
  height: 30px;
  width: 22px;
}

.cta-button {
  background-color: transparent;
  color: #0960BA;
  box-shadow: none;
}

.active-button {
  background: linear-gradient(#0D95D3,#0960BA);
  color: #fff;
}

`;

const RightNav = ({ open }) => {
  return (
    <section className='bg'>
        <Ul open={open}>
            <li>Schedule</li>
            <li>Events</li>
            <li>Sponsors</li>
            <li>Contact us</li>
            <Button buttonText="Get Schedule" icon={AiFillSchedule}/>
        </Ul>
    </section>    
  )
}

export default RightNav