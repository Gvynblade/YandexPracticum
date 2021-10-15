import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE,
    TWsActions
} from '../actions/web-socket';
import { TOrder } from '../types/data'

export type TWsState = {
    wsConnected: boolean,
    data: {
        success: null | boolean,
        orders: TOrder[] | [],
        totalToday: null | number,
        total: null | number
    },
    error: string | null
}

export const initialState: TWsState = {
    wsConnected: false,
    data: {
        success: null,
        orders: [],
        totalToday: null,
        total: null
    },
    error: ''
}

const wsReducer = (state = initialState, action: TWsActions): TWsState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS:
            return {
                ...state,
                error: null,
                wsConnected: true
            };
        case WS_CONNECTION_ERROR:
            return {
                ...state,
                error: action.payload,
                wsConnected: false
            };
        case WS_CONNECTION_CLOSED:
            return {
                ...initialState
            };
        case WS_GET_MESSAGE:
            return {
                ...state,
                error: null,
                data: action.payload
            };
        default: return state
    }
}

export default wsReducer;
