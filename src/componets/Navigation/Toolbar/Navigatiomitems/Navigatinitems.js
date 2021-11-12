import React from 'react'
import './Navigationitems.css'
import { Navigationitem } from './Navigatiomitem/Navigationitem'
export default function Navigatinitems() {
    return (
        <div>
            <ul >
              <Navigationitem link="/" active>Burger builder </Navigationitem>
              <Navigationitem link="/"> Cheackout</Navigationitem>
            </ul>
        </div>
    )
}
