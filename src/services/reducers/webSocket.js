import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_MESSAGE
} from '../actions/web-socket';

export const initialState = {
    wsConnected: false,
    data: {
        success: null,
        orders: [],
        totalToday: null,
        total: null
    },
    error: ''
}

const wsReducer = (state = initialState, action) => {
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
                data: state.data.length
                ? [...state.data, action.payload]
                : action.payload
            };
        default: return state
    }
}

export default wsReducer;
