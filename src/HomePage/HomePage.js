import React from 'react'
import Button from '../UIComponents/Button'
import { AiOutlineLogin, AiOutlineUserAdd, AiFillSchedule } from 'react-icons/ai'
import image from '../../src/assests/Illustration.png'
import heading from '../assests/heading.png'
import Logo from '../assests/logo.png'
import Polygon1 from '../assests/Polygon1.png'
import Polygon2 from '../assests/Polygon2.png'
function HomePage() {
    return (
        <div className='flex'>
            <div className='w-1/2 bg-[#fcfcfc]'>
                <div className=' ml-5 flex space-x-16 items-center'>
                    <div className='cursor-pointer'><img src={Logo} className='h-24' alt='' /></div>
                    <div className='cursor-pointer'>Schedule</div>
                    <div className='cursor-pointer'>Events</div>
                    <div className='cursor-pointer'>Sponsors</div>
                    <div className='cursor-pointer'>Contact us</div>
                </div>
                <div className='flex-col mt-5  items-center'>
                    {/* <span className='text-4xl mt-14 leading-relaxed p-5  mx-auto bg-polygon1 bg-cover'>So,</span>
                    <span className='text-4xl mt-14 leading-relaxed p-5 mx-auto'>what are you waiting for?</span>
                    <p className='text-5xl  tracking-[2px] mx-auto leading-relaxed'>Apratim</p>
                    <span className='text-4xl  tracking-[2px] leading-relaxed mt-2 mb-2 '>is</span>
                    <span className='text-4xl  tracking-[2px] leading-relaxed mt-2 mb-2 text-[#8F00FF] bg-Vector bg-cover'> finally </span> */}
                    <img src={Polygon1} className='object-contain z-0 absolute top-24 ml-1'/>
                    <img src={heading} alt='apratim' className='z-20 ml-10'/>
                    {/* <span className='bg-Polygon2 bg-cover text-4xl p-3 tracking-[2px] leading-relaxed mt-2 mb-2'>here.</span> */}
                    <img src={Polygon2} className='object-contain z-0 absolute top-96 left-96 '/>

                </div>
                <div className='mt-12 space-x-5 ml-10'>
                    <Button buttonText="Register"
                        active
                        icon={AiOutlineUserAdd} />
                    <Button
                        buttonText="Get Schedule"
                        icon={AiFillSchedule}
                    />
                </div>
                <div className='text-sm ml-10 mt-5 '>
                    Already registered with fun and excitement? <span className='text-[#8F00FF] cursor-pointer ml-1'>Login.</span>
                </div>
            </div>
            <div className='w-1/2 bg-[#fffdde] flex-col '>
                <div className='flex space-x-10 mt-8 justify-end mr-10 mb-10'>
                    <Button buttonText="Register"
                        active
                        icon={AiOutlineUserAdd} />
                    <Button
                        buttonText="Login"
                        icon={AiOutlineLogin}
                    />
                </div>
                <div>
                    <img src={image} alt='apratim' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
