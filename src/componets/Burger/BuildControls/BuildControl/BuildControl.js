
import React from 'react'
import './BuildControl.css'

export const BuildControl =(props) =>{
    return (
        <div className="BuildControl">
          
            <div className="Label"> {props.labal} </div>
            <button className='Less' onClick={props.deleted} disabled={props.disabled}>Less </button>
            <button className='More' onClick={props.added}>More </button>
        </div>
    )
}
