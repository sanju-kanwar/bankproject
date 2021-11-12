
import React from 'react'
import { BuildControl } from './BuildControl/BuildControl'
import './BuildContros.css'

 const control= [
    {labal:'Salad',type:'salad'},
    {labal:'Bacon',type:'bacon'},
    {labal:'Cheese',type:'cheese'},
    {labal:'Meat',type:'meat'}
]
export const BuildControls =(props)=>{
    return(
   <div className='BuildControls'>
         current price: <strong>  {props.price.toFixed(2)}</strong>
       {control.map((elm)=>{
           return <BuildControl   labal ={elm.labal} 
           key={elm.labal}
           added={()=> props.ingredientAdd(elm.type)} 
           deleted={()=>props.ingredientDel(elm.type)} disabled={props.disabled[elm.type]} 
           /> 
             
          
       })}
          <button  className="OrderButton " disabled ={!props.purchasable}
             onClick={()=> props.orderd()} >
               order</button>
             
   </div>
)
} 









