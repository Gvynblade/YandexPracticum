import reducer, {initialState} from './order'
import * as types from '../actions/order'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })

    it('should handle CALCULATE_ORDER_PRICE', () => {
        expect(
            reducer(undefined, {
                type: types.CALCULATE_ORDER_PRICE,
                bun: {
                    price: 200
                },
                ingredients: [ {price: 50}, {price: 10}, {price: 120}, {price: 20}]
            })
        ).toEqual(
            {
                ...initialState,
                price: 600
            }
        )
    })

    it('should handle ORDER_DATA_REQUEST', () => {
        expect(
            reducer(undefined, {
                type: types.ORDER_DATA_REQUEST,
                payload: {
                    orderDataRequest: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                orderDataRequest: true
            }
        )
    })

    it('should handle ORDER_DATA_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.ORDER_DATA_SUCCESS,
                payload: {
                    orderData: {
                        orderID: 45645645645645645,
                        statusIcon: 'icon url',
                        orderStatus: "Ваш заказ начали готовить",
                        orderDescription: "Дождитесь готовности на орбитальной станции"
                    },
                    orderDataRequest: false,
                    orderDataSuccess:true
                }
            })
        ).toEqual(
            {
                ...initialState,
                orderData: {
                    orderID: 45645645645645645,
                    statusIcon: 'icon url',
                    orderStatus: "Ваш заказ начали готовить",
                    orderDescription: "Дождитесь готовности на орбитальной станции"
                },
                orderDataRequest: false,
                orderDataSuccess:true
            }
        )
    })

    it('should handle ORDER_DATA_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.ORDER_DATA_ERROR,
                payload: {
                    orderData: {
                        orderID: null,
                        statusIcon: null,
                        orderStatus: null,
                        orderDescription: null
                    },
                    orderDataRequest: false,
                    orderDataSuccess:false,
                    error: 'some error'
                }
            })
        ).toEqual(
            {
                ...initialState,
                orderData: {
                    orderID: null,
                    statusIcon: null,
                    orderStatus: null,
                    orderDescription: null
                },
                orderDataRequest: false,
                orderDataSuccess:false,
                error: 'some error'
            }
        )
    })

    it('should handle ORDER_DATA_RESET', () => {
        expect(
            reducer(undefined, {
                type: types.ORDER_DATA_RESET
            })
        ).toEqual(
            {
                ...initialState
            }
        )
    })

    it('should handle ORDERS_LIST_DATA_REQUEST', () => {
        expect(
            reducer(undefined, {
                type: types.ORDERS_LIST_DATA_REQUEST,
                payload: {
                    ordersListRequest: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                ordersListRequest: true
            }
        )
    })

    it('should handle ORDERS_LIST_DATA_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.ORDERS_LIST_DATA_SUCCESS,
                payload: {
                    ordersList: [ 1, 2, 3, 4, 5 ],
                    ordersListRequest: true,
                    ordersListSuccess: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                ordersList: [ 1, 2, 3, 4, 5 ],
                ordersListRequest: true,
                ordersListSuccess: true,
            }
        )
    })

    it('should handle ORDERS_LIST_DATA_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.ORDERS_LIST_DATA_ERROR,
                payload: {
                    ordersListRequest: false,
                    ordersListSuccess: false,
                    error: 'some error'
                }
            })
        ).toEqual(
            {
                ...initialState,
                ordersListRequest: false,
                ordersListSuccess: false,
                error: 'some error'
            }
        )
    })

})
