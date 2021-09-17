import { ingredientsAPI } from '../../api/api'

export const INGREDIENTS_REQUEST = 'ingredientsReducer/INGREDIENTS_REQUEST'
export const INGREDIENTS_SUCCESS = 'ingredientsReducer/INGREDIENTS_SUCCESS'
export const INGREDIENTS_ERROR = 'ingredientsReducer/IINGREDIENTS_ERROR'

export const SET_MODAL_DATA = 'ingredientsReducer/SET_MODAL_DATA'
export const REMOVE_MODAL_DATA = 'ingredientsReducer/REMOVE_MODAL_DATA'

export const SET_CURRENT_TAB = 'ingredientsReducer/SET_CURRENT_TAB'

export const INCREASE_ITEM_COUNTER = 'ingredientsReducer/INCREASE_ITEM_COUNTER'
export const DECREASE_ITEM_COUNTER = 'ingredientsReducer/DECREASE_ITEM_COUNTER'


export const requestIngredients = () => async (dispatch) => {
    dispatch({
        type: INGREDIENTS_REQUEST,
        payload: {
            ingredientsRequest: true
        }
    })

    let response = await ingredientsAPI.requestIngredients();
    if (response && response.success) {
        dispatch({
            type: INGREDIENTS_SUCCESS,
            payload: {
                ingredients: response.data,
                ingredientsRequest: false,
                ingredientsSuccess:true
                }
        });
    } else {
        dispatch({
            type: INGREDIENTS_ERROR,
            payload: {
                ingredients: [],
                ingredientsRequest: false,
                ingredientsSuccess:false,
                error: response.error
            }
        });
    }
}
