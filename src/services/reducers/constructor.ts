import { ADD_INGREDIENT, DELETE_INGREDIENT, REPLACE_ITEMS, CLEAR_CONSTRUCTOR, TConstructorActions } from '../actions/constructor'
import { TIngredient } from '../types/data'

export type TConstructorState = {
    bun: null | TIngredient,
    ingredients: TIngredient[] | []
}

export const initialState: TConstructorState = {
    bun: null,
    ingredients: []
}

const constructorReducer = (state = initialState, action: TConstructorActions): TConstructorState => {
    switch (action.type) {
        case ADD_INGREDIENT: {

            return action.item.type === "bun" ? {
                ...state,
                bun: action.item
            }
            :
            {
                ...state,
                ingredients: [...state.ingredients, action.item]
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter( (item: TIngredient) => item.hash !== action.hash )
            }
        }
        case REPLACE_ITEMS: {
            const replacingIngredient = state.ingredients.find( (i, index) => index === action.payload.dragIndex)
            let newIngredients = [...state.ingredients]
            newIngredients.splice(action.payload.dragIndex, 1)
            newIngredients.splice(action.payload.hoverIndex, 0, replacingIngredient!)
            return {
                ...state,
                ingredients: newIngredients
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...initialState
            }
        }
        default: return state
    }
}

export default constructorReducer;
