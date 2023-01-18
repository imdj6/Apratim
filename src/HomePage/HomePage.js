import React, { useEffect } from 'react'
import Button from '../UIComponents/Button'
import { AiOutlineLogin, AiOutlineUserAdd, AiFillSchedule } from 'react-icons/ai'
import image from '../../src/assests/Illustration.png'
import heading from '../assests/heading.png'
import Logo from '../assests/logo.png'
import Navbar from '../../src/Components/Navbar.jsx'
import Polygon1 from '../assests/Polygon1.png'
import Polygon2 from '../assests/Polygon2.png'
// events images
import Technical from '../assests/technical.png'
import Cultural from '../assests/cultural.png'
// sponsors images
import TitleSponsor from '../assests/titleSponsor.png'
import Sponsor0 from '../assests/sponsor0.svg'
import Sponsor1 from '../assests/sponsor1.svg'
import Sponsor2 from '../assests/sponsor2.svg'
// watermark images
import TriangleWatermark from '../assests/triangleWatermark.svg'
import CircularWatermark from '../assests/circularWatermark.svg'
import StarWatermark from '../assests/starWatermark.svg'
import Footer from '../Components/Footer'
import Aos from 'aos';
import "aos/dist/aos.css";
function HomePage() {
    useEffect(() => {
        Aos.init({ duration: 800 });
    }, []);
    return (
        <>
            {/* Mobile responsive nav */}
            <Navbar />
            {/* Hero section */}
            <section className='flex'>
                <div className='lg:w-1/2 bg-[#fcfcfc] w-full'>
                    {/* Nav Bar */}
                    <div className='hidden lg:ml-5 lg:flex lg:space-x-16 lg:items-center'>
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
                        <img src={Polygon1} className='object-contain z-0 absolute lg:top-24 lg:ml-1 top-14 left-2' alt='apratim' />
                        <img src={heading} alt='apratim' className='z-20 ml-10 lg:w-auto w-80' />
                        {/* <span className='bg-Polygon2 bg-cover text-4xl p-3 tracking-[2px] leading-relaxed mt-2 mb-2'>here.</span> */}
                        <img src={Polygon2} className='object-contain z-0 absolute lg:top-96 lg:left-96 top-48 right-24' alt='apratim' />

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
                    <div className='hidden lg:inline-flex lg:text-sm lg:ml-10 lg:mt-5 '>
                        Already registered with fun and excitement? <span className='text-[#8F00FF] cursor-pointer ml-1'>Login.</span>
                    </div>
                </div>
                {/* Call to actions of banner */}
                <div className='hidden lg:inline-flex lg:w-1/2 bg-[#fffdde] lg:flex-col '>
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
            <section data-aos="fade-up" className='container px-2 md:px-20 py-20 relative'>
                {/* triangle watermark starts */}
                <img src={TriangleWatermark} className="z-[-1] absolute left-[-10vw] top-[-25vh]" alt="" />
                {/* triangle watermark ends */}
                <iframe width="560" height="315" className='w-full h-[70vh]' src="https://www.youtube-nocookie.com/embed/rTePr8GptH0?controls=0" title="Apratim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </section>
            {/* events section */}
            <section className='container px-2 md:px-20 mb-20 '>
                {/* heading */}
                <div className='mb-10'>
                    <span className='font-poppins text-5xl'>Events</span>
                    {/* bigger line */}
                    <span className='block bg-lineRed w-[8rem] h-2 rounded-[18px]'></span>
                    {/* smaller line */}
                    <span className='block bg-lineGreen w-20 h-2 rounded-[18px] mt-1'></span>
                </div>
                <div className='flex flex-col gap-x-[8.5vw] ml-0 md:ml-20 lg:flex-row px-2 lg:px-0'>
                    <div data-aos="fade-right" className='relative rounded-[18px] bg-boxCyan p-10 pt-6 w-[85vw] h-[70vh] lg:w-[20vw]  lg:h-[52vh]
                    cursor-pointer'>
                        <img data-aos="fade-right" data-aos-duration="2000" className='absolute right-[-10vw] lg:right-[-5vw]' src={Technical} alt="Technical events" />
                        {/* heading */}
                        <span className='absolute font-bebasNeue text-6xl bottom-[12vh]'>TECHNICAL</span>
                        {/* paragraph */}
                        <p className='font-sourceCodePro absolute bottom-[2vh] text-[1.3rem] pr-10'>
                            Events related to programming and hardware.
                        </p>
                    </div>
                    <div data-aos="fade-right" className='relative rounded-[18px] bg-boxPink p-10 pt-6 w-[85vw] h-[70vh] lg:w-[20vw] lg:h-[52vh]
                    mt-10 lg:mt-0 cursor-pointer'>
                        <img data-aos="fade-right" data-aos-duration="2000" className='absolute right-[-10vw] lg:right-[-5vw]' src={Cultural} alt="Cultural events" />
                        {/* heading */}
                        <span className='absolute font-bebasNeue text-6xl bottom-[12vh]'>CULTURAL</span>
                        {/* paragraph */}
                        <p className='font-sourceCodePro absolute text-[1.3rem] bottom-[5vh] pr-10'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                    <div data-aos="fade-right" className='relative rounded-[18px] bg-boxBlue p-10 pt-6 w-[85vw] h-[70vh] lg:w-[20vw] lg:h-[52vh]
                    mt-10 lg:mt-0 cursor-pointer'>
                        <img data-aos="fade-right" data-aos-duration="2000" className='absolute right-[-10vw] lg:right-[-5vw]' src={Technical} alt="Literary events" />
                        {/* heading */}
                        <span className='absolute font-bebasNeue text-6xl bottom-[12vh]'>LITERARY</span>
                        {/* paragraph */}
                        <p className='font-sourceCodePro absolute bottom-[5vh] text-[1.3rem] pr-10'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </div>
                </div>
            </section>
            {/* circular watermark starts */}
            <div className='relative block w-full h-full'>
                <img src={CircularWatermark} className="z-[-1] absolute top-[-25vh] right-0" alt="" />
            </div>
            {/* circular watermark ends */}
            {/* sponsors section */}
            <section className='relative container mx-auto mb-20 px-2 md:px-20'>
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
                    <div className='container bg-white mx-auto w-[80vw] lg:w-[20vw] h-[35vh] p-10 shadow-sponsors rounded-[18px]'>
                        <img src={TitleSponsor} className="w-full h-full" alt="Title Sponsor" />
                    </div>
                </div>
                {/* other sponsors */}
                <div>
                    <span className='font-poppins text-2xl block text-center mb-8 md:ml-0 ml-0 '>Other sponsors</span>
                    {/* other sponsor boxes */}
                    <div className='container mx-auto grid grid-cols-2 lg:grid-cols-6 gap-x-[5vw] gap-y-[5vh] ml-7 lg:ml-0'>
                        <img src={Sponsor0} className='w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px]' alt='sponsor' />
                        <img src={Sponsor1} className='w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px]' alt='sponsor' />
                        <img src={Sponsor2} className='w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px]' alt='sponsor' />
                        <img src={Sponsor1} className='w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px]' alt='sponsor' />
                        <img src={Sponsor2} className='w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px]' alt='sponsor' />
                        <img src={Sponsor0} className='w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px]' alt='sponsor' />
                        {/* <div className='bg-white w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='bg-white w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='bg-white w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='bg-white w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='bg-white w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div>
                        <div className='bg-white w-[10vw] h-[18vh] p-10 shadow-sponsors rounded-[18px]'></div> */}
                    </div>
                </div>
            </section>
            {/* star watermark starts */}
            <div className='relative block w-full h-full'>
                <img src={StarWatermark} className="z-[-1] absolute top-[-55vh] left-0" alt="" />
            </div>
            {/* star watermark ends */}

            {/* About section start */}
            <section className='relative container mx-auto mb-20 px-2 md:px-20'>
                <div className='mb-10'>
                    <span className='font-poppins text-5xl'>About</span>
                    {/* bigger line */}
                    <span className='block bg-lineRed w-[8rem] h-2 rounded-[18px]'></span>
                    {/* smaller line */}
                    <span className='block bg-lineGreen w-20 h-2 rounded-[18px] mt-1'></span>
                </div>
                <div className='font-poppins text-lg p-4 font-medium'>
                    Lorem ipsum dolor sit amet consectetur. Sed lectus ornare velit imperdiet. Etiam aliquam nibh amet risus ullamcorper ultrices imperdiet. Proin vitae mauris urna auctor scelerisque. Tristique mauris ultricies tempor tincidunt etiam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem odio nemo totam? Quisquam eveniet sequi fuga dignissimos delectus nihil dolorum quia tempora nostrum numquam.
                </div>
            </section>
            {/* About section end */}
            {/* schedule section starts */}

            {/* <section className='relative container mx-auto mb-20 px-2 md:px-20'> */}

            {/* </section> */}
            <div className='flex'>
                <hr className='w-1/2 bg-lineRed h-2 rounded-[18px] mb-1' />
                <hr className='w-1/2 bg-lineGreen h-2 rounded-[18px] mb-1' />
            </div>
            <div className='flex mb-40'>
                <hr className='w-1/2 bg-lineGreen h-2 rounded-[18px] mb-10' />
                <hr className='w-1/2 bg-lineRed h-2 rounded-[18px] mb-10' />
            </div>

            {/* schedule section ends */}

            {/* Footer section start */}
            <Footer />
            {/* Footer Section end */}
        </>
    )
}

export default HomePage
