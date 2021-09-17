import { ADD_INGREDIENT, DELETE_INGREDIENT, REPLACE_ITEMS } from '../actions/constructor'

const initialState = {
    bun: null,
    ingredients: []
}

const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: {

            return action.item.type === "bun" ? {
                ...state,
                bun: action.item
            }
            :
            {
                ...state,
                ingredients: [...state.ingredients, {...action.item, hash: action.item._id + Math.floor(Math.random() * 100)}]
            }
        }
        case DELETE_INGREDIENT: {
            return {
                ...state,
                ingredients: state.ingredients.filter( item => item.hash !== action.hash )
            }
        }
        case REPLACE_ITEMS: {
            const replacingIngredient = state.ingredients.find( (i, index) => index === action.payload.dragIndex)
            let newIngredients = [...state.ingredients]
            newIngredients.splice(action.payload.dragIndex, 1)
            newIngredients.splice(action.payload.hoverIndex, 0, replacingIngredient)
            return {
                ...state,
                ingredients: newIngredients
            }
        }
        default: return state
    }
}

export default constructorReducer;
