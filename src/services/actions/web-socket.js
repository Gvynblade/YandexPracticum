export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_STOP = 'WS_CONNECTION_STOP';
export const WS_CONNECTION_SUCCESS = 'wsReducer/WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'wsReducer/WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'wsReducer/WS_CONNECTION_CLOSED';
export const WS_GET_MESSAGE = 'wsReducer/WS_GET_MESSAGE';
export const WS_SEND_MESSAGE = 'WS_SEND_MESSAGE';


export const wsGetMessage = message => {
  return {
    type: WS_GET_MESSAGE,
    payload: message
  };
};

export const wsSendMessage = message => {
  return {
    type: WS_SEND_MESSAGE,
    payload: message
  };
};
