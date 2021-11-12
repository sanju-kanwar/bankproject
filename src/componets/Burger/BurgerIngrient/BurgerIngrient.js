import { Component } from 'react';
import './BurgerIngrient.css'
import propsTypes from 'prop-types'

class BurgerIngrient extends  Component {
    render(){
        let ingrient= null
    switch(this.props.type){
        case('bread-bottom') : ingrient= <div className='BreadBottom'> </div>
        break;
        case('bread-top'): ingrient=(
            <div className='BreadTop '> 
             <div className='Seeds1'></div>
            <div className='Seeds2'></div>
            </div>
        );
        break;
        case('meat'):
        ingrient= <div className='Meat'> </div>
        break;
        case('cheese'):
        ingrient= <div className='Cheese'> </div>
        break;
        case('salad'):
        ingrient= <div className='Salad '> </div>
        break;
        case('bacon'):
        ingrient= <div className='Bacon'> </div>
        break;
        default:
            ingrient= null
    }
    return ingrient
       
    }
    
}
 BurgerIngrient.propsTypes={
     type: propsTypes.string.isRequired
 }
export default BurgerIngrient