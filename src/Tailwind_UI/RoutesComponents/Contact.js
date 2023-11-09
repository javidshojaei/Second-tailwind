import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='w-full bg-[#282a29] pb-96 lg:pb-64 text-white'>
            <div className='w-11/12 mx-auto py-8'>
                <p className=' font-semibold text-2xl pb-28'>Contact Me By </p>
                <div data-aos='fade-right' className='flex flex-wrap justify-start gap-11'>
                    <div>
                        <p className='font-semibold'>Email</p>
                        <p className='mt-3 text-gray-400'>javid10sh@gmail.com</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Phone</p>
                        <p className='mt-3 text-gray-400'>+98 905 160 2500</p>
                    </div>
                    <div>
                        <p className='font-semibold'>Location</p>
                        <p className='mt-3 text-gray-400'>Tehran, IRAN</p>
                    </div>
                </div>
                <div data-aos='fade-up' className='my-14 flex text-2xl gap-3'>
                    <a target='blank' href="https://instagram.com/javid_sh2021?igshid=a29ubnYwb3RrcTl0"><FaInstagram className='hover:text-[#fb923c] transition-all' /></a>
                    <a target='blank' href="https://t.me/javid_shojaei"><FaTelegram className='hover:text-[#fb923c] transition-all' /></a>
                    <a target='blank' href="https://wa.me/qr/RELP5I4MIL6JM1"><FaWhatsapp className='hover:text-[#fb923c] transition-all' /></a>
                    <a target='blank' href="https://www.linkedin.com/in/javid-shojaei-b22bb9271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin className='hover:text-[#fb923c] transition-all' /></a>
                </div>
            </div>
        </div>
    )
}
