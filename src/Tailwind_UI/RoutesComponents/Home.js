import React from 'react'
import { Introduction } from '../introduction/Introduction'
import { AboutMe } from '../aboutMe/AboutMe'
import { MyServices } from '../MyServices/MyServices'

export const Home = () => {
    return (
        <div>
            <Introduction />
            <AboutMe />
            <MyServices />
        </div>
    )
}
