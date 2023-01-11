import React from 'react'
import Button from '../UIComponents/Button'
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai'
function HomePage() {
    return (
        <div className='flex'>
            <div className='w-1/2 bg-[#fcfcfc] h-96'>
                <div className='mt-5 ml-5 flex space-x-10'>
                    <div>Logo</div>
                    <div>Home</div>
                    <div>Color</div>
                    <div>Hpem</div>
                    <div>Hwiw</div>
                </div>
                <div className='flex-col'>
                    <p className='text-4xl mt-14 ml-5 leading-relaxed mx-auto'>So, what are you waiting for?</p>
                    <p className='text-4xl ml-5 tracking-[2px] mx-auto leading-relaxed'>Apratim</p>
                    <p className='text-4xl ml-5 tracking-[2px] leading-relaxed'>is finally here.</p>
                </div>
            </div>
            <div className='w-1/2 bg-[#fffdde] flex-col'>
                <div className='flex space-x-10 mt-5 justify-end mr-10'>
                    <Button buttonText="Register"
                        active
                        icon={AiOutlineUserAdd} />
                    <Button
                        buttonText="Login"
                        icon={AiOutlineLogin}
                    />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default HomePage
