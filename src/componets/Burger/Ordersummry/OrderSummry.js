
import React from 'react'
import Aux from '../../hoc/Aux'
import { Button } from '../../UI/Button/Button'

export const OrderSummry =(props)=> {
    const ingredientSummry = Object.keys(props.ingredient) 
    .map(igkey =>{
        return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey} </span> :{props.ingredient[igkey]}</li>
    })
    return (
        <Aux>
            <h3> Your order    </h3>
            <p> A delious burger with following ingredient </p>
            <ul>
                {ingredientSummry}
               
            </ul>
            <p><strong>total price: {props.price.toFixed(2)} </strong> </p>
            <p>countinue checkout list..? </p>
           
            <Button btnType="Danger" clicked={props.purchasecancel}>Cancel </Button>
            <Button btnType="Success"  clicked={props.purchasecountinue}>Countinue </Button>
        </Aux>
    );
}
