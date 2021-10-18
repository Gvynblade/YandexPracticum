import { TOGGLE_IS_FETCHING, MODAL_OPEN, MODAL_CLOSE, TAppActions } from '../actions/app'

export type TAppState = {
    isFetching: boolean;
    isModalOpen: boolean;
    modalType: 'ingredient' | 'order' | 'feedOrder' | 'profileOrder' | null
}

export const initialState: TAppState = {
    isFetching: false,
    isModalOpen: false,
    modalType: null
}

const appReducer = (state = initialState, action: TAppActions) : TAppState => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING:
        case MODAL_OPEN:
        case MODAL_CLOSE: {
            return {
                ...state,
                ...action.payload
            }
        }
        default: return state
    }
}

export default appReducer;
