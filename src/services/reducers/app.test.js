import reducer, { initialState } from './app'
import * as types from '../actions/app'

describe('app reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })

    it('should handle TOGGLE_IS_FETCHING', () => {
        expect(
            reducer(undefined, {
                type: types.TOGGLE_IS_FETCHING,
                payload: {
                    isFetching: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                isFetching: true,
            }
        )
    })

    it('should handle MODAL_OPEN', () => {
        expect(
            reducer(undefined, {
                type: types.MODAL_OPEN,
                payload: {
                    isModalOpen:true,
                    modalType: 'someType'
                }
            })
        ).toEqual(
            {
                ...initialState,
                isModalOpen: true,
                modalType: 'someType'
            }
        )
    })

    it('should handle MODAL_CLOSE', () => {
        expect(
            reducer(undefined, {
                type: types.MODAL_CLOSE,
                payload: {
                    isModalOpen:false,
                    modalType: null
                }
            })
        ).toEqual(
            {
                ...initialState,
                isModalOpen: false,
                modalType: null
            }
        )
    })
})
