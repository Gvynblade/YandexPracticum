import { INGREDIENTS_REQUEST, INGREDIENTS_SUCCESS,
INGREDIENTS_ERROR, SET_MODAL_DATA,
REMOVE_MODAL_DATA, SET_CURRENT_TAB,
INCREASE_ITEM_COUNTER, DECREASE_ITEM_COUNTER } from '../actions/ingredients'

export const initialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsSuccess: null,
    modalData: {},
    error: null,
    currentTab: 'buns'
}

const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENTS_REQUEST:
        case INGREDIENTS_SUCCESS:
        case INGREDIENTS_ERROR:
        case SET_MODAL_DATA:
        case SET_CURRENT_TAB: {
            return {
                ...state,
                ...action.payload
            }
        }
        case REMOVE_MODAL_DATA: {
            return {
                ...state,
                modalData: initialState.modalData
            }
        }
        case INCREASE_ITEM_COUNTER: {

            const item = state.ingredients.find( i => i._id === action.id)

            const newItems = state.ingredients.map( (i) => {
                if (i._id === item._id && i.type === "bun") {
                    return {
                            ...i,
                            __v: 2
                    }
                }
                if (i._id !== item._id && i.type === "bun" && item.type === "bun") {
                    return {
                            ...i,
                            __v: 0
                    }
                }
                if (i._id === item._id && i.type !== "bun") {
                    return {
                            ...i,
                            __v: ++i.__v
                    }
                }
                return i
            })

            return {
                ...state,
                ingredients: newItems
            }
        }
        case DECREASE_ITEM_COUNTER: {
            const newItems = state.ingredients.map( (i) => {

                if (i._id === action.id && i.type !== "bun") {
                    return {
                            ...i,
                            __v:  --i.__v
                    }
                }
                return i
            }
            )
            return {
                ...state,
                ingredients: newItems
            }
        }
        default: return state
    }
}

export default ingredientsReducer;
