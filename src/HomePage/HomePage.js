import React, { useEffect, useState } from "react";
import Button from "../UIComponents/Button";
import {
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiFillSchedule,
} from "react-icons/ai";
import image from "../../src/assests/Illustration.png";
import heading from "../assests/heading.png";
import Navbar from "../Components/Navbar";
import Logo from "../assests/logo.png";
import Polygon1 from "../assests/Polygon1.png";
import Polygon2 from "../assests/Polygon2.png";
// events images
import Technical from "../assests/technical.png";
import Cultural from "../assests/cultural.png";
// sponsors images
import TitleSponsor from "../assests/titleSponsor.png";
import Sponsor0 from "../assests/sponsor0.svg";
import Sponsor1 from "../assests/sponsor1.svg";
import Sponsor2 from "../assests/sponsor2.svg";
// watermark images
import TriangleWatermark from "../assests/triangleWatermark.svg";
import CircularWatermark from "../assests/circularWatermark.svg";
import StarWatermark from "../assests/starWatermark.svg";
import Footer from "../Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "../UIComponents/Modal";
import Login from "../UIComponents/Login";
import Signup from "../UIComponents/signup";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ApratimImage from "../assests/apratim.webp";
function HomePage() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  //storing the value for the login modal and signup modal and forgot password modal
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
  const handleClickScrollSponsor = () => {
    const element = document.getElementById("sponsor-section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleClickScrollEvent = () => {
    const element = document.getElementById("event-section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
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
      <Navbar />
      {/* Mobile responsive navbar starts here */}
      {/* Mobile responsive navbar ends here */}
        {/* Left side banner starts */}
        <section className="flex">
          <div className="z-10 flex flex-col justify-center lg:w-1/2 bg-[#fcfcfc] w-full relative">
          {/* Nav Bar */}
          {/* <div className="hidden lg:ml-5 lg:flex lg:space-x-16 lg:items-center">
            <div className="cursor-pointer">
              <img src={Logo} className="h-24" alt="" />
            </div>
            <div className="cursor-pointer" data-aos="fade-down">
              Schedule
            </div>
            <div
              className="cursor-pointer"
              data-aos="fade-down"
              onClick={handleClickScrollSponsor}
            >
              Sponsors
            </div>
            <div className="cursor-pointer" data-aos="fade-down">
              Clubs
            </div>
            <div
              className="cursor-pointer"
              data-aos="fade-down"
              onClick={handleClickScrollEvent}
            >
              Events
            </div>
          </div> */}
          <div className="ml-10">
            <img
              src={Polygon1}
              className="absolute lg:top-[15vh] lg:w-[10vw] left-[1vw]"
              alt="apratim"
              data-aos="fade-down"
            />
            <img
              src={heading}
              alt="apratim"
              className="ml-10 lg:w-full w-80"
              data-aos="fade-right"
              data-aos-duration="2000"
            />
            {/* <span className='bg-Polygon2 bg-cover text-4xl p-3 tracking-[2px] leading-relaxed mt-2 mb-2'>here.</span> */}
            <img
              src={Polygon2}
              className="absolute top-[50vh] w-[7vw] left-[30vw]"
              alt="apratim"
              data-aos="fade-up"
            />
          </div>
          {/* CTA Banner starts here */}
          <div className="mt-12 space-x-5 ml-20" data-aos="fade-right">
            <Button buttonText="Register" active icon={AiOutlineUserAdd} />
            <Button buttonText="Get Schedule" icon={AiFillSchedule} />
          </div>
          <div className="hidden lg:inline-flex lg:text-lg lg:ml-20 lg:mt-5 ">
            Already registered with fun and excitement?
            <span className="text-[#8F00FF] cursor-pointer ml-1">Login.</span>
          </div>
          {/* CTA Banner ends here */}
        </div>
        {/* Left side banner ends */}
        {/* right side banner starts here */}
        <div className="relative z-0 lg:w-1/2 lg:h-screen bg-[#fffdde] ">
          {/* <div
            className="flex space-x-10 mt-8 justify-end mr-10 mb-10"
            data-aos="fade-down"
          >
            <Button
              buttonText="Register"
              active
              icon={AiOutlineUserAdd}
              clickHandler={(e) => {
                setState({
                  login: false,
                  signup: true,
                  forgot: false,
                });
              }}
            />
            <Button
              buttonText="Login"
              icon={AiOutlineLogin}
              clickHandler={(e) => {
                setState({
                  login: true,
                  signup: false,
                  forgot: false,
                });
              }}
            />
          </div> */}
            <img
              src={ApratimImage}
              className="w-full h-fit absolute top-1/4"
              alt="apratim"
              data-aos="fade-left"
              data-aos-duration="4000"
            />
        </div>
      </section>
      {/* Right side banner ends here */}
      {/* teaser section */}
      <img
          src={ApratimImage}
          className="w-full p-2 lg:hidden"
          alt="apratim"
          data-aos="fade-left"
          data-aos-duration="4000"
        />
      <section data-aos="fade-up" className="px-2 md:px-20 py-20 relative">
        {/* triangle watermark starts */}
        <img
          src={TriangleWatermark}
          className="z-[-1] absolute left-[-10vw] top-[-25vh]"
          alt=""
        />
        {/* triangle watermark ends */}
        <iframe
          width="560"
          height="315"
          className="w-full h-[70vh]"
          src="https://www.youtube-nocookie.com/embed/rTePr8GptH0?controls=0"
          title="Apratim"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </section>
      {/* events section */}
      <section className="container px-2 md:px-20 mb-20" id="event-section">
        {/* heading */}
        <div className="mb-10">
          <span className="font-poppins text-5xl">Events</span>
          {/* bigger line */}
          <span className="block bg-lineRed w-[8rem] h-2 rounded-[18px]"></span>
          {/* smaller line */}
          <span className="block bg-lineGreen w-20 h-2 rounded-[18px] mt-1"></span>
        </div>
        <div className="flex flex-col gap-x-[10vw] ml-0 md:ml-20 lg:flex-row px-2 lg:px-0 min-w-max">
          <div
            data-aos="fade-right"
            className=" relative rounded-[18px] bg-boxCyan p-10 pt-6 w-[85vw] h-[58vh] lg:w-[20vw]  lg:h-[52vh]
                    cursor-pointer"
          >
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              className="absolute top-2 right-[-10vw] lg:right-[-2vw]"
              src={Technical}
              alt="Technical events"
            />
            {/* heading */}
            <span className="absolute font-bebasNeue text-6xl bottom-[5vh] ">
              TECHNICAL
            </span>
            {/* paragraph */}
            {/* <p className='font-sourceCodePro absolute bottom-[2vh] text-[1.3rem] pr-10'>
                            Events related to programming and hardware.
                        </p> */}
          </div>
          <div
            data-aos="fade-right"
            className="relative rounded-[18px] bg-boxPink p-10 pt-6 w-[85vw] h-[58vh] lg:w-[20vw] lg:h-[52vh]
                    mt-10 lg:mt-0 cursor-pointer"
          >
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              className="absolute top-2 right-[-10vw] lg:right-[-2vw]"
              src={Cultural}
              alt="Cultural events"
            />
            {/* heading */}
            <span className="absolute font-bebasNeue text-6xl bottom-[5vh]">
              CULTURAL
            </span>
            {/* paragraph */}
            {/* <p className='font-sourceCodePro absolute text-[1.3rem] bottom-[5vh] pr-10'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p> */}
          </div>
          <div
            data-aos="fade-right"
            className="relative rounded-[18px] bg-boxBlue p-10 pt-6 w-[85vw] h-[58vh] lg:w-[20vw] lg:h-[52vh]
                    mt-10 lg:mt-0 cursor-pointer"
          >
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              className="absolute top-2 right-[-10vw] lg:right-[-2vw]"
              src={Technical}
              alt="Literary events"
            />
            {/* heading */}
            <span className="absolute font-bebasNeue text-6xl bottom-[5vh]">
              LITERARY
            </span>
            {/* paragraph */}
            {/* <p className='font-sourceCodePro absolute bottom-[5vh] text-[1.3rem] pr-10'>
                            Lorem ipsum dolor sit amet consectetur.
                        </p> */}
          </div>
        </div>
      </section>
      {/* circular watermark starts */}
      <div className="relative block w-full h-full">
        <img
          src={CircularWatermark}
          className="z-[-1] absolute top-[-25vh] right-0"
          alt=""
        />
      </div>
      {/* circular watermark ends */}
      {/* sponsors section */}
      <section
        className="relative container mx-auto mb-20 px-2 md:px-20"
        id="sponsor-section"
      >
        {/* heading */}
        <div className="mb-10">
          <span className="font-poppins text-5xl">Sponsors</span>
          {/* bigger line */}
          <span className="block bg-lineRed w-[8rem] h-2 rounded-[18px]"></span>
          {/* smaller line */}
          <span className="block bg-lineGreen w-20 h-2 rounded-[18px] mt-1"></span>
        </div>
        {/* title sponsor */}
        <div className="mb-8">
          <span className="font-poppins block text-center mb-8 text-2xl">
            Our title sponsor
          </span>
          <div
            className="container bg-white mx-auto hover:scale-95 w-[80vw] lg:w-[20vw] h-[35vh] p-10 shadow-sponsors rounded-[18px]"
            data-aos="fade-up"
          >
            <img
              src="https://static.wixstatic.com/media/6cfd65_26b9f91c90244c95b134f8e408a4b7e8~mv2.png/v1/fill/w_178,h_178,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/BBF%20HD%20Vector.png"
              className="w-full h-full object-contain "
              alt="Title Sponsor"
            />
          </div>
        </div>
        {/* other sponsors */}
        <div>
          <span className="font-poppins text-2xl block text-center mb-8 md:ml-0 ml-0 ">
            Other sponsors
          </span>
          {/* other sponsor boxes */}
          <div className="container mx-auto grid grid-cols-2 lg:grid-cols-6 gap-x-[5vw] gap-y-[5vh] ml-7 lg:ml-0">
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              src="https://images.bhaskarassets.com/web2images/521/2020/11/db_1604320813.png"
              className="w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px] object-contain z-50 bg-white hover:scale-95"
              alt="sponsor"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              src="https://zeevector.com/wp-content/uploads/2021/02/Cafe-Coffee-Day-Logo-Vector.png"
              className="w-[30vw] lg:w-[10vw] hover:scale-95 h-[18vh] shadow-sponsors rounded-[18px] object-contain p-2 z-50 bg-white"
              alt="sponsor"
            />
            <img
              data-aos="fade-right"
              data-aos-duration="2000"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFAayDDz83GHj2YFHUjN6Kb8uBPELFjzxi9NW3tievxJ3pz2yKFvMg2XoOXMCbp7UyA&usqp=CAU"
              className="w-[30vw] lg:w-[10vw] hover:scale-95 h-[18vh] shadow-sponsors rounded-[18px] object-contain p-1 z-50 bg-white"
              alt="sponsor"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src="https://mba.hitbullseye.com/new-code/images/hitbullseye-logo.png"
              className="w-[30vw] lg:w-[10vw] h-[18vh] hover:scale-95 shadow-sponsors rounded-[18px] object-contain z-50 bg-white"
              alt="sponsor"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src="https://iocl.com/images/indianoil_logo.jpg"
              className="w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors rounded-[18px] hover:scale-95 z-50 bg-white object-contain"
              alt="sponsor"
            />
            <img
              data-aos="fade-left"
              data-aos-duration="2000"
              src="https://upload.wikimedia.org/wikipedia/commons/7/74/B4U_Music_logo.png"
              className="w-[30vw] lg:w-[10vw] h-[18vh] shadow-sponsors hover:scale-95 rounded-[18px] object-contain z-50 bg-white"
              alt="sponsor"
            />
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
      <div className="relative block w-full h-full">
        <img
          src={StarWatermark}
          className="z-[-1] absolute top-[-55vh] left-0"
          alt=""
        />
      </div>
      {/* star watermark ends */}

      {/* About section start */}
      <section className="relative container mx-auto mb-20 px-2 md:px-20">
        <div className="mb-10">
          <span className="font-poppins text-5xl">About</span>
          {/* bigger line */}
          <span className="block bg-lineRed w-[8rem] h-2 rounded-[18px]"></span>
          {/* smaller line */}
          <span className="block bg-lineGreen w-20 h-2 rounded-[18px] mt-1"></span>
        </div>
        <div
          className="font-poppins text-lg p-4 font-medium"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          Apratim is an annual college festival organized by Our institution.
          It is a celebration of cultural and academic diversity and provides a
          platform for students to showcase their talents and skills. The
          festival typically includes events such as music concerts, dance
          performances, literary competitions, sports tournaments, and various
          other creative and intellectual pursuits. Apratim is a time for
          students to come together, bond, and create memories that will last a
          lifetime. It is a vibrant and lively celebration that brings together
          the entire college community and often attracts participants and
          attendees from other colleges and universities as well. Overall,
          Apratim is a cherished tradition in your college and is eagerly
          awaited by students, staff, and alumni alike.
        </div>
      </section>
      {/* About section end */}
      {/* schedule section starts */}

      {/* <section className='relative container mx-auto mb-20 px-2 md:px-20'> */}

      {/* </section> */}
      <div className="flex">
        <hr className="w-1/2 bg-lineRed h-2 rounded-[18px] mb-1" />
        <hr className="w-1/2 bg-lineGreen h-2 rounded-[18px] mb-1" />
      </div>
      <div className="flex mb-40">
        <hr className="w-1/2 bg-lineGreen h-2 rounded-[18px] mb-10" />
        <hr className="w-1/2 bg-lineRed h-2 rounded-[18px] mb-10" />
      </div>

      {/* schedule section ends */}

      {/* Footer section start */}
      <Footer />
      {/* Footer Section end */}
    </>
  );
}

export default HomePage;
