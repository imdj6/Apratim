import React from 'react'
import Button from '../UIComponents/Button'
import { AiOutlineLogin, AiOutlineUserAdd, AiFillSchedule } from 'react-icons/ai'
import image from '../../src/assests/Illustration.png'
import heading from '../assests/heading.png'
import Logo from '../assests/logo.png'
import Polygon1 from '../assests/Polygon1.png'
import Polygon2 from '../assests/Polygon2.png'
// events images
import Technical from '../assests/technical.png'
import Cultural from '../assests/cultural.png'
// sponsors images
import TitleSponsor from '../assests/titleSponsor.png'
function HomePage() {
    return (
        <>
            {/* Hero section */}
            <section className='flex'>
                <div className='w-1/2 bg-[#fcfcfc]'>
                    {/* Nav Bar */}
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
                {/* Call to actions of banner */}
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
            </section>
            {/* teaser section */}
            <section className='container mx-auto py-20'>
                <iframe width="560" height="315" className='w-full h-[70vh]' src="https://www.youtube-nocookie.com/embed/rTePr8GptH0?controls=0" title="Apratim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            <section className='container mx-auto mb-20'>
                {/* heading */}
                <div className='mb-10'>
                    <span className='font-poppins text-5xl'>Events</span>
                    {/* bigger line */}
                    <span className='block bg-lineRed w-[8rem] h-2 rounded-[18px]'></span>
                    {/* smaller line */}
                    <span className='block bg-lineGreen w-20 h-2 rounded-[18px] mt-1'></span>
                </div>
                <div className='flex gap-x-[8.5vw]'>
                    <div className='relative rounded-[18px] bg-boxCyan p-10 pt-6 w-[20vw] h-[52vh]'>
                        <img className='absolute right-[-4vw]' src={Technical} alt="Technical events" />
                        {/* heading */}
                        <span className='absolute font-bebasNeue text-6xl bottom-[12vh]'>TECHNICAL</span>
                        {/* paragraph */}
                        <p className='font-sourceCodePro absolute bottom-[2vh] text-[1.3rem] pr-10'>
                            Events related to programming and hardware.
                        </p>
                    </div>
                    <div className='relative rounded-[18px] bg-boxPink p-10 pt-6 w-[20vw] h-[52vh]'>
                        <img className='absolute right-[-4vw]' src={Cultural} alt="Cultural events" />
                        {/* heading */}
                        <span className='absolute font-bebasNeue text-6xl bottom-[12vh]'>CULTURAL</span>
                        {/* paragraph */}
                        <p className='font-sourceCodePro absolute text-[1.3rem] bottom-[5vh] pr-10'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div className='relative rounded-[18px] bg-boxBlue p-10 pt-6 w-[20vw] h-[52vh]'>
                        <img className='absolute right-[-4vw]' src={Technical} alt="Literary events" />
                        {/* heading */}
                        <span className='absolute font-bebasNeue text-6xl bottom-[12vh]'>LITERARY</span>
                        {/* paragraph */}
                        <p className='font-sourceCodePro absolute bottom-[5vh] text-[1.3rem] pr-10'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </section>
            <section className='container mx-auto mb-20'>
                {/* heading */}
                <div className='mb-10'>
                    <span className='font-poppins text-5xl'>Sponsors</span>
                    {/* bigger line */}
                    <span className='block bg-lineRed w-[8rem] h-2 rounded-[18px]'></span>
                    {/* smaller line */}
                    <span className='block bg-lineGreen w-20 h-2 rounded-[18px] mt-1'></span>
                </div>
                {/* title sponsor */}
                <div className='mb-8'>
                    <span className='font-poppins block text-center mb-8 text-2xl'>Our title sponsor</span>
                    <div className='container mx-auto w-[20vw] h-[35vh] p-10 shadow-sponsors rounded-[18px]'>
                        <img src={TitleSponsor} className="w-full h-full" alt="Title Sponsor" />
                    </div>
                </div>
                {/* other sponsors */}
                <div>
                    <span className='font-poppins text-2xl block text-center mb-8'>Other sponsors</span>
                    {/* other sponsor boxes */}
                    <div className='container mx-auto flex gap-x-[4vw]'>
                        <div className='w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage
