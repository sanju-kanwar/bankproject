import React from 'react'
import './Button.css'

export const Button =(props)=> {
    return (
        <div>
            <button onClick={props.clicked} className={props.btnType} >
                {props.children}
            </button>
        </div>
    )
}

// className={[classes.Button, classes[props.btnType]].join(' ')}
// onClick={props.clicked}>{props.children}