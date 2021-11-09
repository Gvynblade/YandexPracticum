import reducer, {initialState} from './constructor'
import * as types from '../actions/constructor'

describe('constructor reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })

    it('should handle ADD_INGREDIENT', () => {
        expect(
            reducer(undefined, {
                type: types.ADD_INGREDIENT,
                item: {
                    _id: "60d3b41abdacab0026a733c7",
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
                    hash: '35345fgdh546546ytghfgw3432'
                }
            })
        ).toEqual(
            {
                ...initialState,
                bun: {
                    _id: "60d3b41abdacab0026a733c7",
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
                    hash: '35345fgdh546546ytghfgw3432'
                }
            }
        )
        expect(
            reducer(undefined, {
                type: types.ADD_INGREDIENT,
                item: {
                    _id: "60d3b41abdacab0026a733c7",
                    name: "Флюоресцентная булка R2-D3",
                    type: "234234234",
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: "https://code.s3.yandex.net/react/code/bun-01.png",
                    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                    hash: '35345fgdh546546ytghfgw3432'
                }
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [{
                    _id: "60d3b41abdacab0026a733c7",
                    name: "Флюоресцентная булка R2-D3",
                    type: "234234234",
                    proteins: 44,
                    fat: 26,
                    carbohydrates: 85,
                    calories: 643,
                    price: 988,
                    image: "https://code.s3.yandex.net/react/code/bun-01.png",
                    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
                    hash: '35345fgdh546546ytghfgw3432'
                }]
            }
        )
    })

    it('should handle DELETE_INGREDIENT', () => {
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
                        hash: 'aaaaaaaaaa'
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
                        hash: 'bbbbbbbbbb'
                    },
                    {
                        _id: "567",
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
                        hash: 'cccccccccccc'
                    }
                ]
            }, {
                type: types.DELETE_INGREDIENT,
                hash: 'bbbbbbbbbb'
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
                        hash: 'aaaaaaaaaa'
                    },
                    {
                        _id: "567",
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
                        hash: 'cccccccccccc'
                    }
                ]
            }
        )
    })

    it('should handle REPLACE_ITEMS', () => {
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
                        hash: 'aaaaaaaaaa'
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
                        hash: 'bbbbbbbbbb'
                    },
                    {
                        _id: "567",
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
                        hash: 'cccccccccccc'
                    }
                ]
            }, {
                type: types.REPLACE_ITEMS,
                payload: {
                    dragIndex: 2,
                    hoverIndex:0
                }
            })
        ).toEqual(
            {
                ...initialState,
                ingredients: [
                    {
                        _id: "567",
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
                        hash: 'cccccccccccc'
                    },
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
                        hash: 'aaaaaaaaaa'
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
                        hash: 'bbbbbbbbbb'
                    }
                ]
            }
        )
    })

    it('should handle CLEAR_CONSTRUCTOR', () => {
        expect(
            reducer({
                bun: ['test', 'test', 'test', 'test', 'test'],
                ingredients: ['test', 'test', 'test', 'test', 'test']
            }, {
                type: types.CLEAR_CONSTRUCTOR,
            })
        ).toEqual(
            {
                ...initialState
            }
        )
    })


})
