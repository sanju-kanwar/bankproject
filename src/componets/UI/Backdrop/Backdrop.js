import React from 'react'
import './Backdrop.css'
export const Backdrop =(props)=> {
    return (
        <div>
            {props.show?<div className='Backdrop' onClick={props.cliked}></div>:null}
        </div>
    )
}
