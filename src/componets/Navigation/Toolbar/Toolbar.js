import React from 'react'
import './Toolbar.css'
import Logo from '../../Logo/Logo'
import Navigatinitems from './Navigatiomitems/Navigatinitems'
export default function Toolbar(props) {
    return (
        <div>
            <header className="Toolbar">
              <div>Menu</div>
              <div> <Logo/> </div>
              <nav>
                  <Navigatinitems/>
              </nav>
            </header>
        </div>
    )
}
