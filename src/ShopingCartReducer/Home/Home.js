import React from 'react'
import { storeDate } from '../Date/Data'

export default function Home() {

    return (
        <div>
            <h3>Home</h3>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {storeDate.map((item) => {
                    return (
                        <div key={item.id} style={{ border: '1px solid black', width: '20%', textAlign: 'center' }}>
                            <div>{item.name}</div>
                            <div>{item.price}</div>
                            <div><img style={{ width: '6rem' }} src={item.img} alt="" /></div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
