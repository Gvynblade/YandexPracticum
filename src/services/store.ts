import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {appReducer, ingredientsReducer, constructorReducer, orderReducer, authReducer, wsReducer} from './reducers'
import { socketMiddleware } from './middleware/'
import { WS_CONNECTION_START, WS_CONNECTION_STOP, WS_CONNECTION_SUCCESS, WS_CONNECTION_ERROR, WS_CONNECTION_CLOSED,
WS_GET_MESSAGE,WS_SEND_MESSAGE} from './actions/web-socket'


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    burgerIngredients: ingredientsReducer,
    burgerConstructor: constructorReducer,
    order: orderReducer,
    webSocket: wsReducer,
})

export type TWsActions = {
    wsInit: typeof WS_CONNECTION_START;
    wsStop: typeof WS_CONNECTION_STOP;
    wsSendMessage: typeof WS_SEND_MESSAGE;
    onOpen: typeof WS_CONNECTION_SUCCESS;
    onClose: typeof WS_CONNECTION_CLOSED;
    onError: typeof WS_CONNECTION_ERROR;
    onMessage: typeof WS_GET_MESSAGE;
}

const wsActions: TWsActions = {
  wsInit: WS_CONNECTION_START,
  wsStop: WS_CONNECTION_STOP,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions)));

const store = createStore(rootReducer, enhancer);

export default store;
