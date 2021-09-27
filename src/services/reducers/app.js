import { TOGGLE_IS_FETCHING, MODAL_OPEN, MODAL_CLOSE } from '../actions/app'

const initialState = {
    isFetching: false,
    isModalOpen: false,
    modalType: null
}

const appReducer = (state = initialState, action) => {
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
