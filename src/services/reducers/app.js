import { TOGGLE_IS_FETCHING } from '../actions/app'

const initialState = {
    isFetching: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: !state.isFetching
            }
        }
        default: return state
    }
}

export default appReducer;
