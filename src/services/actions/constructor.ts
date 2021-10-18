import { TIngredient } from '../types/data'

export const ADD_INGREDIENT = 'constructorReducer/ADD_INGREDIENT' as const;
export const DELETE_INGREDIENT = 'constructorReducer/DELETE_INGREDIENT' as const;
export const REPLACE_ITEMS = 'constructorReducer/REPLACE_ITEMS' as const;

export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    readonly item: TIngredient
}

export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    readonly hash: string
}

export interface IReplaceIngredient {
    readonly type: typeof REPLACE_ITEMS;
    readonly payload: {
        dragIndex: number,
        hoverIndex: number
    }
}

export type TConstructorActions = IAddIngredient | IDeleteIngredient | IReplaceIngredient
