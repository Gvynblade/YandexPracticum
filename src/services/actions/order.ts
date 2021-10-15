import { ordersAPI, userAPI } from '../../api/api'
import succesOrderIcon from '../../images/order-icon.svg'
import { getCookie, setCookie } from '../../utils/cookie'
import { TIngredient, TOrder } from '../types/data'
import { AppDispatch } from '../types/index'

export const CALCULATE_ORDER_PRICE = 'orderReducer/CALCULATE_ORDER_PRICE' as const;

export const ORDER_DATA_REQUEST = 'orderReducer/ORDER_DATA_REQUEST' as const;
export const ORDER_DATA_SUCCESS = 'orderReducer/ORDER_DATA_SUCCESS' as const;
export const ORDER_DATA_ERROR = 'orderReducer/ORDER_DATA_ERROR' as const;

export const ORDER_DATA_RESET = 'orderReducer/ORDER_DATA_RESET' as const;

export const ORDERS_LIST_DATA_REQUEST = 'orderReducer/ORDERS_LIST_DATA_REQUEST' as const;
export const ORDERS_LIST_DATA_SUCCESS = 'orderReducer/ORDERS_LIST_DATA_SUCCESS' as const;
export const ORDERS_LIST_DATA_ERROR = 'orderReducer/ORDERS_LIST_DATA_ERROR' as const;

export interface ICalculateOrderPrice {
    readonly type: typeof CALCULATE_ORDER_PRICE;
    readonly bun: TIngredient | null;
    readonly ingredients: TIngredient[] | []
}

export interface IOrderDataRequest {
    readonly type: typeof ORDER_DATA_REQUEST;
    readonly payload: {
            orderDataRequest: true
    }
}

export interface IOrderDataSuccess {
    readonly type: typeof ORDER_DATA_SUCCESS;
    readonly payload: {
        orderData: {
            orderID: string,
            statusIcon: string,
            orderStatus: "Ваш заказ начали готовить",
            orderDescription: "Дождитесь готовности на орбитальной станции"
        },
        orderDataRequest: false,
        orderDataSuccess:true
    }
}

export interface IOrderDataError {
    readonly type: typeof ORDER_DATA_ERROR;
    readonly payload: {
        orderData: {
            orderID: null,
            statusIcon: null,
            orderStatus: null,
            orderDescription: null
        },
        orderDataRequest: false,
        orderDataSuccess:false,
        error: string
    }
}

export interface IOrderDataReset {
    readonly type: typeof ORDER_DATA_RESET;
}

export interface IOrdersListDataRequest {
    readonly type: typeof ORDERS_LIST_DATA_REQUEST;
    readonly payload: {
        ordersListRequest: true
    }
}

export interface IOrdersListDataSuccess {
    readonly type: typeof ORDERS_LIST_DATA_SUCCESS;
    readonly payload: {
        ordersList: TOrder[],
        ordersListRequest: true,
        ordersListSuccess: true,
    }
}

export interface IOrdersListDataError {
    readonly type: typeof ORDERS_LIST_DATA_ERROR;
    readonly payload: {
        ordersListRequest: false,
        ordersListSuccess: false,
        error: string
    }
}

export type TOrderActions = ICalculateOrderPrice | IOrderDataRequest | IOrderDataSuccess | IOrderDataError |
IOrderDataReset | IOrdersListDataRequest | IOrdersListDataSuccess | IOrdersListDataError

export const requestOrderData = (ingredientIDs: string[]) => async (dispatch: AppDispatch) => {
    dispatch({
        type: ORDER_DATA_REQUEST,
        payload: {
            orderDataRequest: true
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse: any = await userAPI.updateToken()
        if (newTokenResponse && newTokenResponse.success) {
            let authToken = newTokenResponse.accessToken.split('Bearer ')[1];
            if (authToken) {
                setCookie('token', authToken, {
                    expires: 1200
                });
            }
            localStorage.setItem('refreshToken', newTokenResponse.refreshToken);
        } else {
            console.log('update token error')
        }
    }

    let response: any = await ordersAPI.postOrder(ingredientIDs);
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

export const requestAllOrders = () => async (dispatch: AppDispatch) => {
    dispatch({
        type: ORDERS_LIST_DATA_REQUEST,
        payload: {
            ordersListRequest: true
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse: any = await userAPI.updateToken()
        if (newTokenResponse && newTokenResponse.success) {
            let authToken = newTokenResponse.accessToken.split('Bearer ')[1];
            if (authToken) {
                setCookie('token', authToken, {
                    expires: 1200
                });
            }
            localStorage.setItem('refreshToken', newTokenResponse.refreshToken);
        } else {
            console.log('update token error')
        }
    }

    let response: any = await ordersAPI.getALLOrders();
    if (response && response.success) {
        dispatch({
            type: ORDERS_LIST_DATA_SUCCESS,
            payload: {
                ordersList: response.orders,
                ordersListRequest: true,
                ordersListSuccess: true,
            }
        });
    } else {
        dispatch({
            type: ORDERS_LIST_DATA_ERROR,
            payload: {
                ordersListRequest: false,
                ordersListSuccess: false,
                error: response.error
            }
        });
    }
}

export const requestUserOrders = () => async (dispatch: AppDispatch) => {
    dispatch({
        type: ORDERS_LIST_DATA_REQUEST,
        payload: {
            ordersListRequest: true
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse: any = await userAPI.updateToken()
        if (newTokenResponse && newTokenResponse.success) {
            let authToken = newTokenResponse.accessToken.split('Bearer ')[1];
            if (authToken) {
                setCookie('token', authToken, {
                    expires: 1200
                });
            }
            localStorage.setItem('refreshToken', newTokenResponse.refreshToken);
        } else {
            console.log('update token error')
        }
    }

    let response: any = await ordersAPI.getUserOrders();
    if (response && response.success) {
        dispatch({
            type: ORDERS_LIST_DATA_SUCCESS,
            payload: {
                ordersList: response.orders,
                ordersListRequest: true,
                ordersListSuccess: true,
            }
        });
    } else {
        dispatch({
            type: ORDERS_LIST_DATA_ERROR,
            payload: {
                ordersListRequest: false,
                ordersListSuccess: false,
                error: response.error
            }
        });
    }
}
