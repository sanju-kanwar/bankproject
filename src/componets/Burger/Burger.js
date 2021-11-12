
import './Burger.css'
import BurgerIngrient from './BurgerIngrient/BurgerIngrient'


 const Burger =(props)=>  {
           let tranformIngredient= Object.keys(props.ingredients)
           .map(idx =>{ return  [...Array(props.ingredients[idx])].map((_,i)=>{
                return <BurgerIngrient key={idx+i} type={idx} />
              
            });
           
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[])
        if(tranformIngredient.length===0){
            tranformIngredient = <p> please add</p>;
        }
        console.log(tranformIngredient,'ingredient');
        return (
            <div className='Burger'>
                <BurgerIngrient type='bread-top'/>
                {/* <BurgerIngrient type='cheese'/>
                <BurgerIngrient type='meat' /> */}
                {tranformIngredient}
                <BurgerIngrient type='bread-bottom'/>
            </div>
        )
    }
export default Burger

