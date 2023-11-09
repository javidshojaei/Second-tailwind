import React from 'react'
import pic1 from '../../photos/pic1.png'
import pic2 from '../../photos/pic2.png'
import pic3 from '../../photos/pic3.png'
import pic4 from '../../photos/pic4.png'
import pic5 from '../../photos/pic5.png'

export const Discover = () => {
    return (
        <div className='bg-[#504437] bg-gradient-to-r from-[#706862] to-[#36302b]  w-[100%] mx-auto'>
            <div className=' container mx-auto w-[90%] pt-16 pb-7'>
                <p className='text-5xl lg:text-8xl'>
                    <div>Discover </div> <div className='py-2'>Digital Arts and</div><div> Collect NFTs.</div>
                </p>
                <p className='md:w-[35%] w-[70%] py-12 '>
                    EnDasnu is a shared liquidity NFT market smart contract which is used by multiple webisite to provide the users the best possible experience
                </p>
                <div className='flex items-center gap-10'>
                    <button className='bg-gradient-to-r from-[#face52] to-[#8ec275] text-black py-3 px-5 md:px-11 rounded-full'>Get Started</button>
                    <div >Learn More </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-11">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </div>
                <div className='rounded-[2rem] justify-around flex items-center my-14 flex-wrap bg-[#39332e] py-14'>
                    <div className='flex w-[50%] flex-wrap justify-around'>
                        <div>
                            <p>Artwork</p>
                            <p className='text-5xl'>27k+</p>
                        </div>
                        <div>
                            <p>Artwork</p>
                            <p className='text-5xl'>25k+</p>
                        </div>
                        <div>
                            <p>Artwork</p>
                            <p className='text-5xl'>12k+</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span className='mr-5 font'>
                                Art
                            </span>
                            <span className='font-medium text-xl'>
                                3.4 ETH
                            </span>
                        </div>
                        <div className='my-3 flex'>
                            <img src={pic1} width={60} className='rounded-full' alt="" />
                            <img src={pic2} width={60} className='rounded-full mx-[-8px]' alt="" />
                            <img src={pic3} width={60} className='rounded-full mx-[-8px]' alt="" />
                            <img src={pic4} width={60} className='rounded-full mx-[-8px]' alt="" />
                            <img src={pic5} width={60} className='rounded-full mx-[-8px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
