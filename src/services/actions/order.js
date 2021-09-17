import { ordersAPI } from '../../api/api'
import succesOrderIcon from '../../images/order-icon.svg'

export const CALCULATE_ORDER_PRICE = 'orderReducer/CALCULATE_ORDER_PRICE';

export const ORDER_DATA_REQUEST = 'orderReducer/ORDER_DATA_REQUEST'
export const ORDER_DATA_SUCCESS = 'orderReducer/ORDER_DATA_SUCCESS'
export const ORDER_DATA_ERROR = 'orderReducer/ORDER_DATA_ERROR'

export const SET_ORDER_DATA = 'orderReducer/SET_ORDER_DATA'

export const SET_INGREDIENT_ID = 'orderReducer/SET_INGREDIENT_ID'



export const requestOrderData = (ingredientIDs) => async (dispatch) => {
    dispatch({
        type: ORDER_DATA_REQUEST,
        payload: {
            orderDataRequest: true
        }
    })

    let response = await ordersAPI.postOrder(ingredientIDs);
    if (response && response.success) {
        dispatch({
            type: ORDER_DATA_SUCCESS,
            payload: {
                orderData: {
                    orderID: response.order.number,
                    statusIcon: succesOrderIcon,
                    orderStatus: "Ваш заказ начали готовить",
                    orderDescription: "Дождитесь готовности на орбитальной станции"
                },
                orderDataRequest: false,
                orderDataSuccess:true
            }
        });
    } else {
        dispatch({
            type: ORDER_DATA_ERROR,
            payload: {
                orderData: {
                    orderID: null,
                    statusIcon: null,
                    orderStatus: null,
                    orderDescription: null
                },
                orderDataRequest: false,
                orderDataSuccess:false,
                error: response.error
            }
        });
    }
}
