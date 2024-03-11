import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = ({sidebar, setSideBar}) => {
  return (
    <div className='absolute top-0 left-0 w-full py-2 text-white z-20 '>
        <div className="container" data-aos='fade'>
            <div className="flex justify-between items-center">
                {/* logo Section  */}
                <a href='/' className='text-4xl font-bold uppercase'>Converter <span className='font-normal text-2xl'>POC</span></a>

                {/* Navlinks section  */}
                <ul className='lg:flex hidden space-x-4 text-xl'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="">Where to find</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>

                {/* Hamburger Menu  */}
                <div className='sidebar-menu' onClick={()=> setSideBar(!sidebar)}>
                <GiHamburgerMenu className=' text-3xl cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}
