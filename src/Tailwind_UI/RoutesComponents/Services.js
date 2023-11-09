import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaPencilAlt } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { IoIosLaptop } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";
import { HiCode } from "react-icons/hi";
import { HiSupport } from "react-icons/hi";

export const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])


    return (
        <div className='bg-[#2d2f2e]  text-white xl:pb-52 py-12 '>
            <p className='text-sm mb-2 w-11/12  mx-auto font-mono'>My Services</p>
            <p className='text-lg font-semibold w-11/12 mx-auto'>What Can I Do</p>
            <div className='flex flex-wrap gap-4 text-center w-11/12 justify-center lg:justify-center xl:justify-between sm:justify-center md:justify-center mx-auto mt-4'>
                <div data-aos='fade-right' className=' bg-[#282a29] w-[350px] p-2 hover:bg-[#393a39] transition-all'>
                    <div className='text-[#c2844b]  flex text-4xl  justify-center my-4'>
                        <FaPencilAlt />
                    </div>
                    <div>
                        Creative design
                    </div>
                    <div className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dicta tempora
                    </div>
                </div>
                <div data-aos='fade-right' className='bg-[#282a29] w-[350px] p-2 hover:bg-[#393a39]'>
                    <div className='text-[#c2844b]  flex text-4xl justify-center my-4'>
                        <FaFlag />
                    </div>
                    <div>
                        Branding
                    </div>
                    <div className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dicta tempora
                    </div>
                </div>
                <div data-aos='fade-right' className='bg-[#282a29] p-2 w-[350px] hover:bg-[#393a39]'>
                    <div className='text-[#c2844b] flex text-5xl justify-center my-4'>
                        <IoIosLaptop />
                    </div>
                    <div>
                        User Interface
                    </div>
                    <div className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dicta tempora
                    </div>
                </div>
                <div data-aos='fade-right' className='bg-[#282a29] p-2 w-[350px] hover:bg-[#393a39]'>
                    <div className='text-[#c2844b] flex text-4xl justify-center my-4'>
                        <MdDesignServices />
                    </div>
                    <div>
                        User Experience
                    </div>
                    <div className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dicta tempora
                    </div>
                </div>
                <div data-aos='fade-right' className='bg-[#282a29] p-2 w-[350px] hover:bg-[#393a39]'>
                    <div className='text-[#c2844b] flex text-4xl justify-center my-4'>
                        <HiCode />
                    </div>
                    <div>
                        Clean Code
                    </div>
                    <div className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dicta tempora
                    </div>
                </div>
                <div data-aos='fade-right' className='bg-[#282a29] p-2 w-[350px] hover:bg-[#393a39]'>
                    <div className='text-[#c2844b] flex text-4xl justify-center my-4'>
                        <HiSupport />
                    </div>
                    <div>
                        Fast Support
                    </div>
                    <div className='text-gray-400 text-sm'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente dicta tempora
                    </div>
                </div>
            </div>
        </div>
    )
}
