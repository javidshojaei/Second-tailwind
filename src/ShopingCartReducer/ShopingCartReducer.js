import React from 'react'

import './ShopingCartReducer.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Basket from './Basket/Basket'
import Navbar from './Navbar/Navbar'
import { StoreProvider } from './Context-and-reducer/Context'

export default function ShopingCartReducer() {
    return (
        <div>
            <StoreProvider>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/basket' element={<Basket />} />
                    </Routes>
                </BrowserRouter>
            </StoreProvider>
        </div>
    )
}
