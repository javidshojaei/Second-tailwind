import React, { useEffect } from 'react'
import photo3 from '../../photos/my-pic.jpeg'
import Rating from '@mui/material/Rating';
import Aos from 'aos';
import 'aos/dist/aos.css'



export const AboutMe = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className='bg-[#282a29] w-full text-white py-24  lg:flex justify-center gap-9'>
            <div className='w-11/12 mx-auto flex flex-col items-center md:flex-row md:items-baseline gap-8' >
                <div data-aos='zoom-in-right' className=''>
                    <img src={photo3} className='opacity-40 rounded-2xl' width={1300} alt="" />
                </div>
                <div data-aos='zoom-in-left' className=' self-center '>
                    <p className='text-xs pb-1'>ABOUT ME</p>
                    <p className='text-xl font-bold pb-5'>WHO AM I</p>
                    <p className='mb-5 text-gray-400'>My name is Javid Shojaei . I'm a Freelancer and Front-end Developer based in Tehran,Iran and I'm very passionate and dedicated to my work .With 6 years experience as a proffessional Front-end Developer. I have accured the skills necessary to build great and premium websites</p>
                    <p className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim dolores eligendi aspernatur quis nisi excepturi nesciunt, rerum harum! Libero sed ab doloremque deserunt quasi aliquid eos assumenda maxime similique eum?</p>
                    <div className='bg-[#2d2f2e]  p-4 mt-6 rounded-md '>
                        <div className='flex flex-wrap justify-between'>
                            <div className=' mb-5 text-left'>
                                <div>Html 5</div>
                                <div className='text-left' >
                                    <Rating name="read-only" value={5} readOnly />
                                </div>
                            </div>
                            <div className='md:flex-wrap'>
                                <div>Css 3</div>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                            <div className=''>
                                <div>Java Script</div>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between mb-5'>
                            <div className=''>
                                <div>Bootsrap 5</div>
                                <Rating name="read-only" value={3} readOnly />
                            </div>
                            <div className=''>
                                <div>Tailwind</div>
                                <Rating name="read-only" value={3} readOnly />
                            </div>
                            <div className=''>
                                <div>MUI</div>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-between'>
                            <div className=''>
                                <div>React</div>
                                <Rating name="read-only" value={4} readOnly />
                            </div>
                            <div className=''>
                                <div>Type Script</div>
                                <Rating name="read-only" value={3} readOnly />
                            </div>
                            <div className=''>
                                <div>Next js</div>
                                <Rating name="read-only" value={1} readOnly />
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up">
                        <button className=' transition-all my-6 p-2 px-4 rounded-3xl text-[11px] font-bold bg-gradient-to-r from-orange-300 to-orange-600'>Download Cv</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
