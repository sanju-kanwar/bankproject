import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../Burger/Burger'
import { BuildControls } from '../../Burger/BuildControls/BuildControls'
import { Model } from '../../UI/Model/Model'
import { OrderSummry } from '../../Burger/Ordersummry/OrderSummry'

const INGREDIENT_PRICE={
    salad:0.5,
    bacon:0.4,
    cheese:1.5,
    meat:0.6,
}
export default class Burgerbuilder extends Component {
    state={
       ingredients:{
       
        salad:0,
        bacon:0,
        cheese:0,
        meat:0,
       },
       totalPrice:4,
       purchaseValule:false,
        purchasing:false

    }
    
    puchaseHndl=()=>{
        this.setState({purchasing:true})
        console.log('gfhf');
    }
     purchseCancel=()=>{
         this.setState({purchasing:false})
     }
       purchaseCountinue=()=>{
           this.setState({purchasing:true})
           alert('continue')
       } 

     updateValue=()=>{
         let ingredients= {
             ...this.state.ingredients
         }
         const sum = Object.keys(ingredients)
         .map((igkey)=>{
             return ingredients[igkey]
         })
         .reduce((igkey,i)=>{
             return igkey+i;
         },0)
         this.setState({purchaseValule:sum >0})
     }
    addIngredient =(type)=>{
      const oldIngredient = this.state.ingredients[type]
      const updateCounted= oldIngredient+1;
      const updateIngre={...this.state.ingredients}

      updateIngre[type] = updateCounted
      const priceAddition = INGREDIENT_PRICE[type]
      const oldPrice= this.state.totalPrice
      const newPrice=  oldPrice+priceAddition
      this.setState({totalPrice:newPrice,ingredients:updateIngre})
      console.log( newPrice,'newprice');
      this.updateValue()
    }

    removeIngerdient=(type)=>{
        const oldIngredient = this.state.ingredients[type]
        if(oldIngredient <=0){
            return;
        }
        const updateCounted= oldIngredient-1;
        const updateIngre={...this.state.ingredients}
  
        updateIngre[type] = updateCounted
        const priceDelt = INGREDIENT_PRICE[type]
        const oldPrice= this.state.totalPrice
        const newPrice=  oldPrice-priceDelt
        this.setState({totalPrice:newPrice,ingredients:updateIngre})
        this.updateValue()
        console.log( newPrice,'newprice');
    }
    render() { 
        let disablInfo= {...this.state.ingredients}
        for(let key in disablInfo){
            disablInfo[key] =disablInfo[key] <=0
        }

        return (
            <Aux>
                <Model show={this.state.purchasing}  modelCancel={this.purchseCancel}>
                    <OrderSummry ingredient={this.state.ingredients}
                  price={this.state.totalPrice}
                    purchasecancel={this.purchseCancel}
                    purchasecountinue={this.purchaseCountinue}
                    
                    />
                </Model>
            
                <Burger ingredients={this.state.ingredients} />
               <BuildControls ingredientAdd={this.addIngredient}
                 ingredientDel={this.removeIngerdient} 
                 disabled={disablInfo}
                 price={this.state.totalPrice}
                 purchasable={this.state.purchaseValule} 
                 orderd={this.puchaseHndl} 
                 />
                 
            </Aux>
        )
    }
}
