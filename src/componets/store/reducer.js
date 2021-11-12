import {ADD_INGREDIENT,REMOVE_INGREDIENT} from './action '

const initialState={
    ingredients:{
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice:4,
}
export const Reducer=(state=initialState,action)=> {
    switch(action.type){
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]:state.ingredients[action.payload]+1
                }
            } 
        case REMOVE_INGREDIENT:
            return  {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]:state.ingredients[action.payload]-1
                }
            }

            default:
                return state;
    }
}
