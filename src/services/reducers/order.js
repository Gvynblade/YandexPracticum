import { CALCULATE_ORDER_PRICE, ORDER_DATA_REQUEST,
ORDER_DATA_SUCCESS, ORDER_DATA_ERROR, ORDER_DATA_RESET,
ORDERS_LIST_DATA_REQUEST, ORDERS_LIST_DATA_SUCCESS,
ORDERS_LIST_DATA_ERROR } from '../actions/order'

export const initialState = {
    price: 0,
    orderData: {
        orderID: null,
        statusIcon: null,
        orderStatus: null,
        orderDescription: null
    },
    orderDataRequest: false,
    orderDataSuccess: null,
    ordersList: [],
    ordersListRequest: false,
    ordersListSuccess: null,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_DATA_REQUEST:
        case ORDER_DATA_SUCCESS:
        case ORDER_DATA_ERROR:
        case ORDERS_LIST_DATA_REQUEST:
        case ORDERS_LIST_DATA_SUCCESS:
        case ORDERS_LIST_DATA_ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }
        case CALCULATE_ORDER_PRICE: {
            let price = action.bun ? action.bun.price * 2 : 0;
            action.ingredients.forEach( (i) => {
                price += i.price;
             })
            return {
                ...state,
                price
            }
        }
        case ORDER_DATA_RESET: {
            return {
                ...state,
                orderData: initialState.orderData
            }
        }
        default: return state
    }
}

export default orderReducer;
