import React from 'react'
import { Navbar } from './components/Navbar'
import { Discover } from './components/Discover'
import { HotTrending } from './components/HotTrending'

export const Second_Tailwind = () => {
    return (
        <div className='bg-[#2f2c28] text-white '>
            <div >
                <Navbar />
                <Discover />
                <HotTrending />
            </div>
        </div>
    )
}
