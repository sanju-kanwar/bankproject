import React from 'react'
import './Navigationitem.css'

export const Navigationitem =(props)=> {
    return (
       
              <li className="Navigationitem">
           <a href={props.link} className={props.active} >
               {props.children}
          </a>
           
              </li>
       
    )
}
