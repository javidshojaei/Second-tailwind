import React from 'react'
import photo from '../../photos/my-pic.jpeg'
import ReactTyped from 'react-typed'
import Typed from 'react-typed'
import Aos from 'aos';
import 'aos/dist/aos.css'
import pic from '../../photos/photo.png'
import { Link } from 'react-router-dom';


export const Introduction = () => {
    return (
        <div className='flex w-full ' >
            <div className=' flex justify-between  bg-[#1a1a1c] text-white w-full pb-20'>
                <div className='flex justify-center  flex-col w-11/12 mx-auto'>
                    <h5 data-aos='fade-right' className='pt-20 pb-7 text-gray-300'>
                        Hello, My Name Is
                    </h5>
                    <h1 data-aos='fade-right' className='text-7xl pb-9 font-bold'>Javid Shojaei</h1>
                    <div data-aos='fade-right' className='text-xl h-14 text-gray-300 pl-5'>
                        <Typed
                            strings={[
                                'A Creative Freelancer and Front-end Developer',
                                'A Happy Developer !',
                                'I Love Software Development !']}
                            typeSpeed={30}
                            backSpeed={30}
                            loop
                        />
                    </div>
                    <div >
                        <Link to={'about'}>
                            <button data-aos='fade-left' className=' bg-orange-500 transition-all my-6 p-2 px-4 rounded-3xl text-[11px] font-bold hover:bg-gradient-to-r from-orange-400 to-orange-600'>KNOW MORE</button>
                        </Link>
                    </div>
                </div>
                {/*  <img src={pic} data-aos='fade-left' className=' hidden lg:block right-20 bottom-56 grayscale' alt="" /> */}
            </div>
            {/*     <div className='absolute right-80 scale-125 top flex top-[8rem]'>
                <img src={photo} width={300} alt="" />
            </div> */}
        </div>
    )
}
