import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaDribbble, FaBars, FaXmark } from "react-icons/fa6";

const Navbutton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/services", link: "Services" },
        { path: "/contacts", link: "Contacts" }
    ]
    return (
        <header className=' bg-black fixed top-0 left-0 right-0'>
            <nav className='px-4 py-4  max-w-7xl mx-auto flex justify-between items-center'>
                {/* logo */}
                <a href='/' className='text-xl font-bold text-white capitalize'>design<span className=' text-orange-500 uppercase'>dk</span></a>

                {/* / nav items for large screen md above */}
                <ul className='text-white md:flex gap-12 text-lg hidden font-medium'>
                    {
                        navItems.map(({ path, link }) =>
                            <li>
                                <NavLink className={({ isActive }) =>
                                    [
                                        isActive ? "active" : ""
                                    ].join(" ")
                                } to={path}>{link}</NavLink>
                            </li>)
                    }
                </ul>

                {/*  icons, install react icons  */}
                <div className=' text-white hidden lg:flex gap-4 items-center'>
                    <a href="/" className=' hover:text-orange-500 transition-all duration-300'><FaFacebook /></a>
                    <a href="/" className=' hover:text-orange-500  transition-all duration-300'><FaDribbble /></a>
                    <a href="/" className=' hover:text-orange-500  transition-all duration-300'><FaTwitter /></a>

                    {/* log in button */}
                    <button className='bg-orange-500 px-6 py-2 rounded-lg font-medium uppercase hover:bg-white hover:text-orange-500 hover:font-semibold transition-all duration-200 ease-in'>log-in</button>
                </div>

                {/* memu  button for mobile devices */}
                <div className='text-white md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }

                    </button>
                </div>
            </nav>

            {/*  menu bar for mobile */}
            <div>
                <ul className={`text-white md:hidden gap-12 text-lg block mt-14 space-y-5 px-4 py-6 font-semibold  bg-white ${isMenuOpen ? "fixed top-0 left-0 right-0 w-full  transition-all ease-out duration-300" : "hidden"}`}>
                    {
                        navItems.map(({ path, link }) =>
                            <li className='text-black  hover:text-orange-500 transition-all  duration-200 ease-out'>
                                <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                            </li>)
                    }
                </ul>

            </div>
        </header>
    )
}

export default Navbutton