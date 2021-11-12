
import React from 'react'
import burgeLogo from '../../assets/images/burger-logo.png'
import './logo.css'
export default function Logo(props) {
    return (
        <div className='Logo'>
            <img src={burgeLogo} alt='myburger' />
        </div>
    )
}
