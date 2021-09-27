import { userAPI } from '../../api/api'
import { getCookie, setCookie } from '../../utils/cookie'

export const REGISTRATION_REQUEST = 'authReducer/REGISTRATION_REQUEST'
export const REGISTRATION_SUCCESS = 'authReducer/REGISTRATION_SUCCESS'
export const REGISTRATION_ERROR = 'authReducer/REGISTRATION_ERROR'

export const LOGIN_REQUEST = 'authReducer/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'authReducer/LOGIN_SUCCESS'
export const LOGIN_ERROR = 'authReducer/LOGIN_ERROR'

export const FORGOT_PASSWORD = 'authReducer/FORGOT_PASSWORD'
export const FORGOT_PASSWORD_SUCCESS = 'authReducer/FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_ERROR = 'authReducer/FORGOT_PASSWORD_ERROR'

export const REQUEST_NEW_PASSWORD = 'authReducer/REQUEST_NEW_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'authReducer/RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR = 'authReducer/RESET_PASSWORD_ERROR'

export const SET_AUTHORISED = 'authReducer/SET_AUTHORISED'
export const SET_NO_AUTHORISED = 'authReducer/SET_AUTHORISED'

export const GET_USER_DATA = 'authReducer/GET_USER_DATA'
export const GET_USER_DATA_SUCCES = 'authReducer/GET_USER_DATA_SUCCES'
export const GET_USER_DATA_ERROR = 'authReducer/GET_USER_DATA_ERROR'

export const UPDATE_USER_DATA = 'authReducer/UPDATE_USER_DATA'
export const UPDATE_USER_DATA_SUCCES = 'authReducer/UPDATE_USER_DATA_SUCCES'
export const UPDATE_USER_DATA_ERROR = 'authReducer/UPDATE_USER_DATA_ERROR'

export const REQUEST_LOGOUT = 'authReducer/REQUEST_LOGOUT'
export const REQUEST_LOGOUT_SUCCES = 'authReducer/REQUEST_LOGOUT_SUCCES'
export const REQUEST_LOGOUT_ERROR = 'authReducer/REQUEST_LOGOUT_ERROR'

export const requestRegistration = (formData) => async (dispatch) => {

    dispatch({
        type: REGISTRATION_REQUEST,
        payload: {
            registrationRequest: true
        }
    })

    let response = await userAPI.register(formData);
    if (response && response.success) {
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: {
                isAuthorised: true,
                userInfo: response.user,
                registrationRequest: false,
                registrationSuccess: true
            }
        });
        let authToken = response.accessToken.split('Bearer ')[1];
        if (authToken) {
            setCookie('token', authToken, {
                expires: 1200
            });
        }
        localStorage.setItem('refreshToken', response.refreshToken);
    } else {
        dispatch({
            type: REGISTRATION_ERROR,
            payload: {
                registrationRequest: false,
                registrationSuccess: false
            }
        });
    }
}

export const requestLogin = (formData) => async (dispatch) => {

    dispatch({
        type: LOGIN_REQUEST,
        payload: {
            loginRequest: true
        }
    })

    let response = await userAPI.login(formData);
    if (response && response.success) {
        dispatch({
            type: LOGIN_SUCCESS,
            payload: {
                isAuthorised: true,
                userInfo: response.user,
                loginRequest: false,
                loginSuccess: true
            }
        });
        let authToken = response.accessToken.split('Bearer ')[1];
        if (authToken) {
            setCookie('token', authToken, {
                expires: 1200
            });
        }
        localStorage.setItem('refreshToken', response.refreshToken);
    } else {
        dispatch({
            type: LOGIN_ERROR,
            payload: {
                loginRequest: false,
                loginSuccess: false
            }
        });
    }
}

export const requestNewPassword = (formData) => async (dispatch) => {

    dispatch({
        type: FORGOT_PASSWORD,
        payload: {
            forgotPasswordRequest: true,
        }
    })

    let response = await userAPI.requestPasswordReset(formData);
    if (response && response.success) {
        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: {
                forgotPasswordSuccess: true,
                forgotPasswordRequest: false,
                isResetPaswordRequested: true
            }
        });
    } else {
        dispatch({
            type: FORGOT_PASSWORD_ERROR,
            payload: {
                forgotPasswordRequest: false,
                forgotPasswordSuccess: false
            }
        });
    }
}

export const resetPassword = (formData) => async (dispatch) => {

    dispatch({
        type: REQUEST_NEW_PASSWORD,
        payload: {
            resetPasswordRequest: true,
        }
    })

    let response = await userAPI.resetPassword(formData);
    if (response && response.success) {
        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: {
                resetPasswordRequest: false,
                resetPasswordSuccess: true,
                isResetPaswordRequested:false
            }
        });
    } else {
        dispatch({
            type: RESET_PASSWORD_ERROR,
            payload: {
                resetPasswordRequest: false,
                resetPasswordSuccess: false,
            }
        });
    }
}

export const getUserData = () => async (dispatch) => {

    dispatch({
        type: GET_USER_DATA,
        payload: {
            getUserDataRequest: true,
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse = await userAPI.updateToken()
        if (newTokenResponse && newTokenResponse.success) {
            let authToken = newTokenResponse.accessToken.split('Bearer ')[1];
            if (authToken) {
                setCookie('token', authToken, {
                    expires: 1200
                });
            }
            localStorage.setItem('refreshToken', newTokenResponse.refreshToken);
        } else {
            console.log('update token error')
        }
    }

    let response = await userAPI.getUserData();
    if (response && response.success) {
        dispatch({
            type: GET_USER_DATA_SUCCES,
            payload: {
                getUserDataRequest: false,
                getUserDataSuccess: true,
                userInfo: response.user
            }
        });
    } else {
        dispatch({
            type: GET_USER_DATA_ERROR,
            payload: {
                getUserDataRequest: false,
                getUserDataSuccess: false,
            }
        });
    }
}

export const updateUserData = (formData) => async (dispatch) => {

    dispatch({
        type: UPDATE_USER_DATA,
        payload: {
            updateUserDataRequest: true,
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse = await userAPI.updateToken()
        if (newTokenResponse && newTokenResponse.success) {
            let authToken = newTokenResponse.accessToken.split('Bearer ')[1];
            if (authToken) {
                setCookie('token', authToken, {
                    expires: 1200
                });
            }
            localStorage.setItem('refreshToken', newTokenResponse.refreshToken);
        } else {
            console.log('update token error')
        }
    }

    let response = await userAPI.patchUserData(formData);
    if (response && response.success) {
        dispatch({
            type: UPDATE_USER_DATA_SUCCES,
            payload: {
                updateUserDataRequest: false,
                updateUserDataSuccess: true,
                userInfo: response.user
            }
        });
    } else {
        dispatch({
            type: UPDATE_USER_DATA_ERROR,
            payload: {
                updateUserDataRequest: false,
                updateUserDataSuccess: false,
            }
        });
    }
}

export const userLogout = () => async (dispatch) => {

    dispatch({
        type: REQUEST_LOGOUT,
        payload: {
            logoutRequest: true,
        }
    })

    let response = await userAPI.logout();
    if (response && response.success) {
        localStorage.removeItem('refreshToken')
        dispatch({
            type: REQUEST_LOGOUT_SUCCES,
            payload: {
                isAuthorised: false,
                logoutRequest: false,
                logoutSuccess: true,
            }
        })

    } else {
        dispatch({
            type: REQUEST_LOGOUT_ERROR,
            payload: {
                logoutRequest: false,
                logoutSuccess: false,
            }
        });
    }
}
