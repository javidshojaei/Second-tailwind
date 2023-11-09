import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'gray' }}>
            <Link style={{ textDecoration: 'none', fontSize: '1.8rem', color: 'white', padding: '8px' }} to='/'>Home</Link>
            <Link style={{ textDecoration: 'none', fontSize: '1.8rem', color: 'white', padding: '8px' }} to='basket'>basket</Link>
        </div>
    )
}
