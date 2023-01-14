import React from 'react'
import { AiFillYoutube, AiFillInstagram ,AiOutlineUserAdd,AiOutlineLogin} from 'react-icons/ai'
import Button from '../UIComponents/Button'
function Navbar() {
    return (
        // {Mobile responsive navbar}
        <section className='flex justify-between lg:hidden bg-[#fcfcfc] pb-5 pt-2 items-center'>
            <div className='flex space-x-10 ml-4'>
                <AiFillYoutube color='#762AE2' size={30} />
                <AiFillInstagram color='#762AE2' size={30} />
            </div>
            <div className='flex space-x-5 mr-2'>
                <Button buttonText="Register"
                    active
                    icon={AiOutlineUserAdd} />
                <Button
                    buttonText="Login"
                    icon={AiOutlineLogin}
                />
            </div>
        </section>
    )
}

export default Navbar
