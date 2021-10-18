import reducer, {initialState} from './ingredients'
import * as types from '../actions/ingredients'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })

    it('should handle INGREDIENTS_REQUEST', () => {
        expect(
            reducer(undefined, {
                type: types.INGREDIENTS_REQUEST,
                payload: {
                    ingredientsRequest: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                ingredientsRequest: true
            }
        )
    })

    it('should handle INGREDIENTS_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.INGREDIENTS_SUCCESS,
                payload: {
                    ingredients: [
                        1,2,3,4,5,6,7,8,9,0
                    ],
                    ingredientsRequest: false,
                    ingredientsSuccess:true
                }
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [
                    1,2,3,4,5,6,7,8,9,0
                ],
                ingredientsRequest: false,
                ingredientsSuccess:true
            }
        )
    })

    it('should handle INGREDIENTS_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.INGREDIENTS_ERROR,
                payload: {
                    ingredients: [],
                    ingredientsRequest: false,
                    ingredientsSuccess:false,
                    error: 'response.error'
                }
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [],
                ingredientsRequest: false,
                ingredientsSuccess:false,
                error: 'response.error'
            }
        )
    })

    it('should handle SET_MODAL_DATA', () => {
        expect(
            reducer(undefined, {
                type: types.SET_MODAL_DATA,
                payload: {
                    modalData: {
                        1: 2,
                        2: 3,
                        3: 4
                    }
                }
            })
        ).toEqual(
            {
                ...initialState,
                modalData: {
                    1: 2,
                    2: 3,
                    3: 4
                }
            }
        )
    })
    it('should handle REMOVE_MODAL_DATA', () => {
        expect(
            reducer(undefined, {
                type: types.REMOVE_MODAL_DATA
            })
        ).toEqual(
            {
                ...initialState,
            }
        )
    })

    it('should handle SET_CURRENT_TAB', () => {
        expect(
            reducer(undefined, {
                type: types.SET_CURRENT_TAB,
                payload: {
                    currentTab: '234234234'
                }
            })
        ).toEqual(
            {
                ...initialState,
                currentTab: '234234234'
            }
        )
    })

    it('should handle INCREASE_ITEM_COUNTER', () => {
        expect(
            reducer({
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    }
                ]
            }, {
                type: types.INCREASE_ITEM_COUNTER,
                id: "567"
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 1
                    }
                ]
            }
        )
        expect(
            reducer({
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    }
                ]
            }, {
                type: types.INCREASE_ITEM_COUNTER,
                id: "123"
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 2
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 0
                    }
                ]
            }
        )
    })

    it('should handle DECREASE_ITEM_COUNTER', () => {
        expect(
            reducer({
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 2
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "67567",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 5
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 9
                    }
                ]
            }, {
                type: types.DECREASE_ITEM_COUNTER,
                id: "567"
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 2
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "67567",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 5
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 8
                    }
                ]
            }
        )
        expect(
            reducer({
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 2
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "345435",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 5
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 9
                    }
                ]
            }, {
                type: types.DECREASE_ITEM_COUNTER,
                id: "123"
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [
                    {
                        _id: "123",
                        name: "Флюоресцентная булка R2-D3",
                        type: "bun",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 2
                    },
                    {
                        _id: "234",
                        name: "Флюоресцентная булка R2-D3",
                        type: "345435",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 5
                    },
                    {
                        _id: "567",
                        name: "Флюоресцентная булка R2-D3",
                        type: "123",
                        proteins: 44,
                        fat: 26,
                        carbohydrates: 85,
                        calories: 643,
                        price: 988,
                        image: "https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v: 9
                    }
                ]
            }
        )
    })

})
