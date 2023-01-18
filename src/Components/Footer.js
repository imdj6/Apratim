import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"
import Logo from '../assests/logo.png'
// import { useNavigate } from "react-router-dom";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-info mb-10 md:mb-0">
                    <img src={Logo} alt="logo" className="h-16 p-2" />
                    {/* <h2 className="text-2xl font-bold">Apratim</h2> */}
                    {/* <h2 className="text-sm font-thin">(Techno-cultural Fest)</h2> */}
                    <p className="text-lg font-semibold">Chandigarh College Of Engineering and Technology sector 26 chandigarh</p>
                    <p className="footer-subtext fs2">Mail us at- apratim@ccet.ac.in</p>
                </div>

                <div className="footer-links-container">
                    <div className="footer-links footer-link-1 mt-0 lg:mt-8 ">
                        <ul>
                            <li
                                className="diff_item"
                                onClick={(e) => {
                                    e.preventDefault();
                                    window.open(
                                        "mailto:apratim@ccet.ac.in?subject=Regarding Sponsorship&body=Hey there!"
                                    );
                                }}
                            >
                                Events
                            </li>
                            <li
                                className="diff_item"
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     navigate("/privacy/");
                            // }}
                            >
                                sponsors
                            </li>
                            <li className="diff_item">Organising Team</li>
                        </ul>
                    </div>
                    <div className="footer-links footer-link-2 mt-0 ml-5 lg:mt-8 lg:ml-0">
                        <ul>
                            <li
                                className="diff_item"
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     navigate("/about");
                            // }}
                            >
                                Contact us
                            </li>
                            <li
                                className="diff_item"

                            >
                                privacy
                            </li>
                            <li className="diff_item">Terms</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-logo">
                    <span className='footer-name'><img src={Logo} alt="logo" className="h-24 " /></span> <br />
                    {/* <span className="text-sm font-bold p-1">Apratim 2k23 </span> */}
                </div>
                <div className="footer-connect">
                    <ul className="footer-connect-links">
                        <li><a rel="noreferrer" href="https://www.linkedin.com/school/chandigarh-college-of-engineering-technology-degree-wing-panjab-university/?originalSubdomain=in" target="_blank"><FaLinkedinIn color="#0960BA" /> </a> </li>
                        <li><a rel="noreferrer" href="https://twitter.com/" target="_blank"><FaTwitter color="#0960BA" /></a> </li>
                        <li className='diff_item'><a rel="noreferrer" href="https://www.instagram.com/ccetapratim/?hl=en" target="_blank"><FaInstagram color="#0960BA" /></a> </li>
                        <li><a rel="noreferrer" href="https://www.youtube.com/@ccetapratim3386" target="_blank"><IoLogoYoutube color="#0960BA" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
