import React from 'react'
import { Navbar } from './navabar/Navbar'
import { Introduction } from './introduction/Introduction'
import { AboutMe } from './aboutMe/AboutMe'
import { MyServices } from './MyServices/MyServices'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './RoutesComponents/About'
import { Home } from './RoutesComponents/Home'
import { Services } from './RoutesComponents/Services'
import { Contact } from './RoutesComponents/Contact'

export const Tailwind_UI = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<AboutMe />} />
                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                </Routes>
                <div>
                    {/* <Home/> */}
                    {/* <Introduction />
                    <AboutMe />
                    <MyServices /> */}
                </div>
            </BrowserRouter>
        </div >
    )
}
