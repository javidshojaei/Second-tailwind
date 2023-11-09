import React from 'react'
import pic1 from '../../photos/pic-4-1.png'

export const HotTrending = () => {
    return (
        <div className='w-[100%]'>
            <div className='w-[90%] flex justify-between mx-auto container py-8'>
                <div className='flex flex-wrap w-[42%] justify-around'>
                    <div className='bg-[#434733] md:w-64 md:h-44 rounded-[2.3rem] my-7'>
                        <img src={pic1} className='relative bottom-7 left-6 w-[10px] md:w-[204px]' alt="" />
                    </div>
                    <div className='bg-[#334335] md:w-64 md:h-44 rounded-[2.3rem] my-7'>
                        <img src={pic1} className='relative bottom-7 left-6 w-[10px] md:w-[204px]' alt="" />
                    </div>
                    <div className='bg-gradient-to-tr from-[#615b54] to-[#483433]  md:w-64 md:h-44 rounded-[2.3rem] my-7'>
                        <img src={pic1} className='relative bottom-7 left-6 w-[10px] md:w-[204px]' alt="" />
                    </div>
                    <div className='bg-[#4a3c2f] md:w-64 md:h-44 rounded-[2.3rem] my-7'>
                        <img src={pic1} className='relative bottom-7 left-6 w-[10px] md:w-[204px]' alt="" />
                    </div>
                </div>
                <div className='w-[50%] pt-8'>
                    <p className='text-lime-600 mb-4 text-left'>Popular Item</p>
                    <p className='text-lg md:text-7xl'>Hot Trending </p>
                    <p className='text-lg md:text-7xl'>On This</p>
                    <p className='text-lg md:text-7xl'>Week.</p>
                    <p className='mt-8 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia unde natus, voluptatum doloribus fugit est distinctio, dolores maxime totam ullam tempore tempora? Ullam praesentium nemo corrupti error</p>
                    <div className='flex items-center gap-9'>
                        <span>See all</span>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-11">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
