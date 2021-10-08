import reducer, {initialState} from './webSocket'
import * as types from '../actions/web-socket'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })

    it('should handle WS_CONNECTION_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.WS_CONNECTION_SUCCESS,

            })
        ).toEqual(
            {
                ...initialState,
                error: null,
                wsConnected: true
            }
        )
    })

    it('should handle WS_CONNECTION_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.WS_CONNECTION_ERROR,
                payload: 'some error'
            })
        ).toEqual(
            {
                ...initialState,
                error: 'some error',
                wsConnected: false
            }
        )
    })

    it('should handle WS_CONNECTION_CLOSED', () => {
        expect(
            reducer(undefined, {
                type: types.WS_CONNECTION_CLOSED
            })
        ).toEqual(
            {
                ...initialState
            }
        )
    })

    it('should handle WS_GET_MESSAGE', () => {
        expect(
            reducer(undefined, {
                type: types.WS_GET_MESSAGE,
                payload: 'some data'
            })
        ).toEqual(
            {
                ...initialState,
                error: null,
                data: 'some data'
            }
        )
    })

})
