import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {

    const [navOpen, setNavOpen] = useState(false)
    const [smallNav, setSmallNav] = useState(false)
    
    function scroll() {
        if (window.scrollY>30) {
            setSmallNav(true)
        }else{
            setSmallNav(false)
        }
    }
    window.addEventListener('scroll', scroll);
          
  return (
    <>             
        <nav className="fixed top-0 z-50 w-full bg-secondColor text-white border-gray-200">
        <div className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ${smallNav? "py-5":"py-10"} duration-500 px-3`}>
            <Link to="">
            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">START FRAMEWORK</span>
            </Link>
            <button onClick={() => setNavOpen(!navOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded={navOpen ? "true" : "false"}>
                <span className="sr-only">Open main menu</span>
                <svg className="text-white hover:text-black w-full h-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor"  d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={`${navOpen?"max-h-screen":"max-h-0"} duration-500 overflow-hidden md:max-h-full`} id="navbar-default">
                <ul className="uppercase text-md font-bold flex flex-col p-4 md:p-0 mt-4  border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                    <li>
                    <NavLink to="about" className="block py-2 px-3 rounded">about</NavLink>
                    </li>
                    <li>
                    <NavLink to="portfolio" className="block py-2 px-3 rounded">Portfolio</NavLink>
                    </li>
                    <li>
                    <NavLink to="contact" className="block py-2 px-3 rounded">Contact</NavLink>
                    </li>
                </ul>
            </div>
            
        </div>
        </nav>

    </>
  )
}



