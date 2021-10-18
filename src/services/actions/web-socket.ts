import { TOrders } from '../types/data'

export const WS_CONNECTION_START = 'wsReducer/WS_CONNECTION_START' as const;
export const WS_CONNECTION_STOP = 'wsReducer/WS_CONNECTION_STOP' as const;
export const WS_CONNECTION_SUCCESS = 'wsReducer/WS_CONNECTION_SUCCESS' as const;
export const WS_CONNECTION_ERROR = 'wsReducer/WS_CONNECTION_ERROR' as const;
export const WS_CONNECTION_CLOSED = 'wsReducer/WS_CONNECTION_CLOSED' as const;
export const WS_GET_MESSAGE = 'wsReducer/WS_GET_MESSAGE' as const;
export const WS_SEND_MESSAGE = 'wsReducer/WS_SEND_MESSAGE' as const;


export interface IWsConnectionSuccess {
    readonly type : typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionError {
    readonly type : typeof WS_CONNECTION_ERROR;
    readonly payload: string
}

export interface IWsConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: TOrders
}

export type TWsActions = IWsConnectionSuccess | IWsConnectionError | IWsConnectionClosed | IWsGetMessage
