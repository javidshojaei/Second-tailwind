import React from 'react'

export const Navbar = () => {
    return (
        <div className='py-6 flex lg:justify-between items-center w-[90%] container mx-auto'>
            <div className='w-[30%] md:w-[40%]'>
                EnDasmu
            </div>
            <div className='hidden w-[70%] md:w-[60%] justify-around  lg:justify-between items-center md:flex '>
                <div>
                    Collection
                </div>
                <div>
                    Market Place
                </div>
                <div>
                    Community
                </div>
                <div className='border-2 p-3 px-5 rounded-full'>
                    Connect Wallet
                </div>
            </div>
        </div>
    )
}
