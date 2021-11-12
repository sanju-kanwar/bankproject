import React from 'react'
import Logo from '../../Logo/Logo'
import Navigatinitems from '../Toolbar/Navigatiomitems/Navigatinitems'
import './Sidedrawer.css'
export const Sidedrawer =()=> {
    return (
        <div className="Sidedrawer">
            <Logo/>
            <nav> 
                <Navigatinitems/>
            </nav>
        </div>
    )
}
