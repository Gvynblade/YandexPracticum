import { CALCULATE_ORDER_PRICE, ORDER_DATA_REQUEST,
ORDER_DATA_SUCCESS, ORDER_DATA_ERROR,
SET_ORDER_DATA, ORDER_DATA_RESET } from '../actions/order'

const initialState = {
    price: 0,
    orderData: {
        orderID: null,
        statusIcon: null,
        orderStatus: null,
        orderDescription: null
    },
    orderDataRequest: false,
    orderDataSuccess: false,
    error: null
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_DATA_REQUEST:
        case ORDER_DATA_SUCCESS:
        case ORDER_DATA_ERROR:
        case SET_ORDER_DATA: {
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
