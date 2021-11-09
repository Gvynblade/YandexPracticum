import { ingredientsAPI } from '../../api/api'
import { TIngredient } from '../types/data'
import { AppDispatch } from '../types/index'

export const INGREDIENTS_REQUEST = 'ingredientsReducer/INGREDIENTS_REQUEST' as const;
export const INGREDIENTS_SUCCESS = 'ingredientsReducer/INGREDIENTS_SUCCESS' as const;
export const INGREDIENTS_ERROR = 'ingredientsReducer/IINGREDIENTS_ERROR' as const;

export const SET_MODAL_DATA = 'ingredientsReducer/SET_MODAL_DATA' as const;
export const REMOVE_MODAL_DATA = 'ingredientsReducer/REMOVE_MODAL_DATA' as const;

export const SET_CURRENT_TAB = 'ingredientsReducer/SET_CURRENT_TAB' as const;

export const INCREASE_ITEM_COUNTER = 'ingredientsReducer/INCREASE_ITEM_COUNTER' as const;
export const DECREASE_ITEM_COUNTER = 'ingredientsReducer/DECREASE_ITEM_COUNTER' as const;

export const CLEAR_ITEMS_COUNTER = 'ingredientsReducer/CLEAR_ITEMS_COUNTER' as const;

export interface IIngredientsRequest {
    readonly type: typeof INGREDIENTS_REQUEST
    readonly payload: {
        ingredientsRequest: true
    }
}

export interface IIngredientsSuccess {
    readonly type: typeof INGREDIENTS_SUCCESS
    readonly payload: {
        ingredients: TIngredient[],
        ingredientsRequest: false,
        ingredientsSuccess:true
    }
}

export interface IIngredientsError {
    readonly type: typeof INGREDIENTS_ERROR
    readonly payload: {
        ingredients: [],
        ingredientsRequest: false,
        ingredientsSuccess:false,
        error: string
    }
}

export interface ISetModalData {
    readonly type: typeof SET_MODAL_DATA
    readonly payload: {
        modalData: TIngredient
    }
}

export interface IRemoveModalData {
    readonly type: typeof REMOVE_MODAL_DATA
}

export interface ISetCurrentTab {
    readonly type: typeof SET_CURRENT_TAB
    readonly payload: {
        currentTab: 'buns' | 'sauces' | 'mains'
    }
}

export interface IIncreaseItemCounter {
    readonly type: typeof INCREASE_ITEM_COUNTER
    readonly id: string
}

export interface IDecreaseItemCounter {
    readonly type: typeof DECREASE_ITEM_COUNTER
    readonly id: string
}

export interface IClearItemsCounter {
    readonly type: typeof CLEAR_ITEMS_COUNTER
}

export type TIngredientsActions = IIngredientsRequest | IIngredientsSuccess | IIngredientsError | ISetModalData |
IRemoveModalData | ISetCurrentTab | IIncreaseItemCounter | IDecreaseItemCounter | IClearItemsCounter

export const requestIngredients = () => async (dispatch: AppDispatch) => {

    try{
        dispatch({
            type: INGREDIENTS_REQUEST,
            payload: {
                ingredientsRequest: true
            }
        })

        let response: any = await ingredientsAPI.requestIngredients();
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
    } catch (e) {
        console.error(e)
    }

}
