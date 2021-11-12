 import React from 'react'
 import './Model.css'
 import Aux from '../../hoc/Aux'
 import { Backdrop } from '../Backdrop/Backdrop'
 export const Model =(props)=> {
     return (
         <Aux>
             <Backdrop show={props.show} cliked={props.modelCancel} />
         <div className='Modal' style={{transform:props.show?'translateY(0)':'translateY(-100vh)',
         opacity:props.show?'1':'0'}} >
             {props.children}
         </div>
         </Aux>
     )
 }
 