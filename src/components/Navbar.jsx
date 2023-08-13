import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../images/logo.png';

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () => {
        setMobileNavOpen(!mobileNavOpen);
    };
    return (
        <nav className={`py-2 md:px-32 px-5 flex justify-between items-center text-[white] drop-shadow-lg z-50 bg-transparent absolute top-0 w-full `}>
            <div className="flex items-center h-[10vh]">
                <img className="w-12 overflow-hidden" src={Logo} alt="Logo" />
                {/* <h1 className="text-xl ml-2 font-bold">360 Auto</h1> */}
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex md:mt-2">
                <li className="p-4 cursor-pointer">
                    {/* Conditionally render the Link or ScrollLink based on the current page */}
                     
                        <ScrollLink
                            activeClass="active"
                            to="homeSection"
                            smooth={true}
                            offset={-70}
                            duration={2000}
                        >
                            Home
                        </ScrollLink>
                    
               </li>
                <li className="p-4 cursor-pointer">
                   
                        <ScrollLink
                            activeClass="active"
                            to="aboutSection"
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            About Us
                        </ScrollLink>
                   
                </li>
                <li className="p-4 cursor-pointer">
                    
                        <ScrollLink
                            activeClass="active"
                            to="servicesSection"
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Services
                        </ScrollLink>
                   
                </li>
                <li className="p-4 cursor-pointer">
                        <ScrollLink
                            activeClass="active"
                            to="contactSection"
                            smooth={true}
                            offset={-70}
                            duration={1000}
                        >
                            Contact Us
                        </ScrollLink>
                   
                </li>
                {/* Repeat the above pattern for other navigation links */}
            </ul>

            {/* Mobile Navigation */}

            <div onClick={toggleMobileNav} className="block md:hidden cursor-pointer">
                {mobileNavOpen ? <AiOutlineClose size={20} color="white" /> : <AiOutlineMenu color="white" size={30} />}
            </div>

            <div className={mobileNavOpen ? 'fixed top-0 left-0 w-full h-auto pb-20 border-r-2 border-gray-900 bg-[#000300] ease-linear duration-200 z-50 ' : 'fixed -left-full top-0 z-50 '}>
                <div className="w-full pr-3 flex items-center justify-between  pt-10 px-4">
                    <div className="basis-[50%] flex justify-between items-center">
                            <ScrollLink 
                                activeClass="active"
                                to="homeSection"
                                smooth={true}
                                offset={-70}
                                duration={1000}
                            >
                                <img className="w-16" src={Logo} alt="Logo" />
                            </ScrollLink>
                       

                        {/* <h1 className="text-xl ml-2 font-bold">360 Auto</h1> */}
                    </div>
                    <div onClick={toggleMobileNav} className="block md:hidden cursor-pointer  z-50">
                        {mobileNavOpen ? <AiOutlineClose size={30} color="white" /> : <AiOutlineMenu color="white" size={30} />}
                    </div>
                </div>
                <ul className="p-4 uppercase z-50">
                    <div onClick={toggleMobileNav}>
                        <li className="p-4 border-b border-gray-600 cursor-pointer">
                           
                                <ScrollLink
                                    activeClass="active"
                                    to="homeSection"
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Home
                                </ScrollLink>
                        </li>
                        <li className="p-4 border-b border-gray-600 cursor-pointer">
                                <ScrollLink
                                    activeClass="active"
                                    to="aboutSection"
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    About Us
                                </ScrollLink>
                           
                        </li>
                        <li className="p-4 border-b border-gray-600 cursor-pointer">
                                <ScrollLink
                                    activeClass="active"
                                    to="servicesSection"
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Services
                                </ScrollLink>
                        </li>
                        <li className="p-4 border-b border-gray-600 cursor-pointer">
                                <ScrollLink
                                    activeClass="active"
                                    to="contactSection"
                                    smooth={true}
                                    offset={-70}
                                    duration={1000}
                                >
                                    Contact Us
                                </ScrollLink>
                        </li>
                        {/* Repeat the above pattern for other navigation links */}
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
