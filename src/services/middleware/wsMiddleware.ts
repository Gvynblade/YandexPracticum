import { getCookie } from '../../utils/cookie'
import { TWsActions } from '../store'

export const socketMiddleware = (wsActions: TWsActions) => {
    return (store: any) => {
        let socket: any = null;

        return (next: any) => (action: any) => {
            const { dispatch, getState } = store;
            const { type, payload } = action;
            const { wsInit, wsStop, wsSendMessage, onOpen, onClose, onError, onMessage } = wsActions;

            if (type === wsInit) {
                const isTokenReqired = payload.isToken
                const accessToken = getCookie('token')
                const url = isTokenReqired? payload.url + `?token=${accessToken}` : payload.url
                socket = new WebSocket(url);
            }

            if (type === wsStop) {
                socket.close('1000', 'Нормальное закрытие без ошибок.')
            }

            if (socket) {

                // функция, которая вызывается при открытии сокета
                socket.onopen = (event: any) => {
                    dispatch({ type: onOpen, payload: event });
                };

                // функция, которая вызывается при ошибке соединения
                socket.onerror = (event: any) => {
                    dispatch({ type: onError, payload: event });
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = (event: any) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({ type: onMessage, payload: parsedData });
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = (event: any) => {
                    dispatch({ type: onClose, payload: event });
                };

                if (type === wsSendMessage) {
                    const message = payload;
                    socket.send(JSON.stringify(message));
                }
            }

            next(action);
        };
    };
};
