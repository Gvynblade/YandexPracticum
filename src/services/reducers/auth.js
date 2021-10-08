import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR,
LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, FORGOT_PASSWORD,
FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR,REQUEST_NEW_PASSWORD,
RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, SET_AUTHORISED, SET_NO_AUTHORISED
, GET_USER_DATA, GET_USER_DATA_SUCCES, GET_USER_DATA_ERROR, UPDATE_USER_DATA,
UPDATE_USER_DATA_SUCCES, UPDATE_USER_DATA_ERROR, REQUEST_LOGOUT,
REQUEST_LOGOUT_SUCCES, REQUEST_LOGOUT_ERROR} from '../actions/auth'

export const initialState = {
    isAuthorised: null,
    userInfo: {
        email: '',
        name: ''
    },
    registrationRequest: false,
    registrationSuccess: null,
    loginRequest: false,
    loginSuccess: null,
    isResetPaswordRequested: false,
    forgotPasswordRequest: false,
    forgotPasswordSuccess: null,
    resetPasswordRequest: false,
    resetPasswordSuccess: null,
    getUserDataRequest: false,
    getUserDataSuccess: null,
    updateUserDataRequest: false,
    updateUserDataSuccess: null,
    logoutRequest: false,
    logoutSuccess: null,
}

const authReducer = ( state = initialState, action) => {
    switch (action.type) {

        case REGISTRATION_REQUEST:
        case REGISTRATION_SUCCESS:
        case REGISTRATION_ERROR:
        case LOGIN_REQUEST:
        case LOGIN_SUCCESS:
        case LOGIN_ERROR:
        case FORGOT_PASSWORD:
        case FORGOT_PASSWORD_SUCCESS:
        case FORGOT_PASSWORD_ERROR:
        case REQUEST_NEW_PASSWORD:
        case RESET_PASSWORD_SUCCESS:
        case RESET_PASSWORD_ERROR:
        case SET_AUTHORISED:
        case SET_NO_AUTHORISED:
        case GET_USER_DATA:
        case GET_USER_DATA_SUCCES:
        case GET_USER_DATA_ERROR:
        case UPDATE_USER_DATA:
        case UPDATE_USER_DATA_SUCCES:
        case UPDATE_USER_DATA_ERROR:
        case REQUEST_LOGOUT:
        case REQUEST_LOGOUT_SUCCES:
        case REQUEST_LOGOUT_ERROR: {
            return {
                ...state,
                ...action.payload
            }
        }

        default: return state
    }
}

export default authReducer;
