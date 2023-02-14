import React from 'react';
import styled from 'styled-components';
import { AiOutlineLogin, AiOutlineUserAdd, AiFillSchedule } from 'react-icons/ai';
import Button from '../UIComponents/Button';



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 0px;
  padding-top: 0rem;
  background-color: transparent;

  li {
    padding: 18px;
    color: black;
    font-size: 22px;
  }

  @media (max-width: 1350px){
    position: fixed;
    background-color: white;
    flex-flow: column wrap;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    box-shadow: 0px 2px 4px #d4d4ff;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 300px;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out;
    height: 100%;
  }

  li {
    padding-left: 5px;
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

  .login {
  background-color: blue;
  margin-bottom: 20px;
  }

  .button{
    margin-bottom: 20px;
    margin-left: 0px;
    margin-right: 30px;
  }

  button.button.cta-button{
    margin-left: 0px;
  }
`;


const RightNav = ({ open,setOpen }) => {
  const handleClickScrollSponsor = () => {
    const element = document.getElementById('sponsor-section');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
};
const handleClickScrollEvent = () => {
    const element = document.getElementById('event-section');
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
};


  return (
    <section className='bg'>
        <Ul open={open}>
            <li>Schedule</li>
            <li onClick={handleClickScrollEvent}>Events</li>
            <li onClick={handleClickScrollSponsor}>Sponsors</li>
            <li>Contact us</li>
            <div className='mt-3 space-x-5 ml-5'>
                <Button buttonText="Register"
                  active
                  icon={AiOutlineUserAdd} />
                <Button
                  buttonText="Get Schedule"
                  icon={AiFillSchedule}
                />
            </div>
        </Ul>
    </section>    
  )
}

export default RightNav