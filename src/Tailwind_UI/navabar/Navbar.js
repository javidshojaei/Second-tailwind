import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Tailwind_UI } from '../Tailwind_UI'
import { About } from '../RoutesComponents/About'
import { FaTimes } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css'

export const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false)


    return (
        <>


            <div className=' w-full bg-[#1b1b1d] text-white '>
                <div className='w-11/12 py-4 text-xl bg-[#1b1b1d]  mx-auto flex justify-between '>
                    <div className='text-orange-400 cursor-pointer'>
                        Logo
                    </div>
                    {showMenu === false ?
                        (<>
                            <svg onClick={() => setShowMenu(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidthidth="1.5" stroke="currentColor" className="w-6 h-6 md:hidden">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </>)
                        :
                        (<div  className='flex-row text-end w-full'>
                            <div className='flex justify-end ' onClick={() => setShowMenu(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <Link to={'/'}>
                                <div onClick={() => setShowMenu(false)} className='hover:text-[#fb923c] my-3 transition-all cursor-pointer'>
                                    Home
                                </div >
                            </Link>
                            <Link to={"about"}>
                                <div  onClick={() => setShowMenu(false)} className='hover:text-[#fb923c] my-3 transition-all cursor-pointer'>
                                    About
                                </div>
                            </Link>
                            <Link to={'services'}>
                                <div onClick={() => setShowMenu(false)} className='hover:text-[#fb923c] my-3 transition-all cursor-pointer'>
                                    Services
                                </div>
                            </Link>
                            <Link to={'contact'}>
                                <div onClick={() => setShowMenu(false)} className='hover:text-[#fb923c] my-3 transition-all cursor-pointer'>
                                    Contact
                                </div>
                            </Link>
                        </div>)}


                    <div className='hidden md:flex lg:flex space-x-5 lg:space-x-11'>
                        <Link to={'/'}>
                            <div className='hover:text-[#fb923c] transition-all cursor-pointer'>
                                Home
                            </div >
                        </Link>
                        <Link to={"about"}>
                            <div className='hover:text-[#fb923c] transition-all cursor-pointer'>
                                About
                            </div>
                        </Link>
                        <Link to={'services'}>
                            <div className='hover:text-[#fb923c] transition-all cursor-pointer'>
                                Services
                            </div>
                        </Link>
                        <Link to={'contact'}>
                            <div className='hover:text-[#fb923c] transition-all cursor-pointer'>
                                Contact
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
