import { userAPI } from '../../api/api'
import { getCookie, setCookie } from '../../utils/cookie'
import { AppDispatch } from '../types/index'

export const REGISTRATION_REQUEST = 'authReducer/REGISTRATION_REQUEST' as const;
export const REGISTRATION_SUCCESS = 'authReducer/REGISTRATION_SUCCESS' as const;
export const REGISTRATION_ERROR = 'authReducer/REGISTRATION_ERROR' as const;

export const LOGIN_REQUEST = 'authReducer/LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'authReducer/LOGIN_SUCCESS' as const;
export const LOGIN_ERROR = 'authReducer/LOGIN_ERROR' as const;

export const FORGOT_PASSWORD = 'authReducer/FORGOT_PASSWORD' as const;
export const FORGOT_PASSWORD_SUCCESS = 'authReducer/FORGOT_PASSWORD_SUCCESS' as const;
export const FORGOT_PASSWORD_ERROR = 'authReducer/FORGOT_PASSWORD_ERROR' as const;

export const REQUEST_NEW_PASSWORD = 'authReducer/REQUEST_NEW_PASSWORD' as const;
export const RESET_PASSWORD_SUCCESS = 'authReducer/RESET_PASSWORD_SUCCESS' as const;
export const RESET_PASSWORD_ERROR = 'authReducer/RESET_PASSWORD_ERROR' as const;

export const SET_AUTHORISED = 'authReducer/SET_AUTHORISED' as const;
export const SET_NO_AUTHORISED = 'authReducer/SET_AUTHORISED' as const;

export const GET_USER_DATA = 'authReducer/GET_USER_DATA' as const;
export const GET_USER_DATA_SUCCES = 'authReducer/GET_USER_DATA_SUCCES' as const;
export const GET_USER_DATA_ERROR = 'authReducer/GET_USER_DATA_ERROR' as const;

export const UPDATE_USER_DATA = 'authReducer/UPDATE_USER_DATA' as const;
export const UPDATE_USER_DATA_SUCCES = 'authReducer/UPDATE_USER_DATA_SUCCES' as const;
export const UPDATE_USER_DATA_ERROR = 'authReducer/UPDATE_USER_DATA_ERROR' as const;

export const REQUEST_LOGOUT = 'authReducer/REQUEST_LOGOUT' as const;
export const REQUEST_LOGOUT_SUCCES = 'authReducer/REQUEST_LOGOUT_SUCCES' as const;
export const REQUEST_LOGOUT_ERROR = 'authReducer/REQUEST_LOGOUT_ERROR' as const;

export interface IRegistrationRequest {
    readonly type: typeof REGISTRATION_REQUEST;
    readonly payload: {
        registrationRequest: true
    }
}

export interface IRegistrationSuccess {
    readonly type: typeof REGISTRATION_SUCCESS;
    readonly payload: {
        isAuthorised: true,
        userInfo: {
            email: string,
            name: string
        },
        registrationRequest: false,
        registrationSuccess: true
    }
}

export interface IRegistrationError {
    readonly type: typeof REGISTRATION_ERROR;
    readonly payload: {
        registrationRequest: false,
        registrationSuccess: false
    }
}

export interface ILoginRequest {
    readonly type: typeof LOGIN_REQUEST;
    readonly payload: {
        loginRequest: true
    }
}

export interface ILoginSuccess {
    readonly type: typeof LOGIN_SUCCESS;
    readonly payload: {
        isAuthorised: true,
        userInfo: {
            email: string,
            name: string
        },
        loginRequest: false,
        loginSuccess: true
    }
}

export interface ILoginError {
    readonly type: typeof LOGIN_ERROR;
    readonly payload: {
        loginRequest: false,
        loginSuccess: false
    }
}

export interface IForgotPassword {
    readonly type: typeof FORGOT_PASSWORD;
    readonly payload: {
        forgotPasswordRequest: true,
    }
}

export interface IForgotPasswordSuccess {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
    readonly payload: {
        forgotPasswordSuccess: true,
        forgotPasswordRequest: false,
        isResetPaswordRequested: true
    }
}

export interface IForgotPasswordError {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
    readonly payload: {
        forgotPasswordRequest: false,
        forgotPasswordSuccess: false
    }
}

export interface IRequestNewPassword {
    readonly type: typeof REQUEST_NEW_PASSWORD;
    readonly payload: {
        resetPasswordRequest: true,
    }
}

export interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
    readonly payload: {
        resetPasswordRequest: false,
        resetPasswordSuccess: true,
        isResetPaswordRequested:false
    }
}

export interface IResetPasswordError {
    readonly type: typeof RESET_PASSWORD_ERROR;
    readonly payload: {
        resetPasswordRequest: false,
        resetPasswordSuccess: false
    }
}

export interface ISetAuthorised {
    readonly type: typeof SET_AUTHORISED;
    readonly payload: {
        isAuthorised: true
    }
}

export interface ISetUnAuthorised {
    readonly type: typeof SET_NO_AUTHORISED;
    readonly payload: {
        isAuthorised: false
    }
}

export interface IGetUserData {
    readonly type: typeof GET_USER_DATA;
    readonly payload: {
        getUserDataRequest: true,
    }
}

export interface IGetUserDataSuccess {
    readonly type: typeof GET_USER_DATA_SUCCES;
    readonly payload: {
        getUserDataRequest: false,
        getUserDataSuccess: true,
        userInfo: {
            email: string,
            name: string
        },
    }
}

export interface IGetUserDataError {
    readonly type: typeof GET_USER_DATA_ERROR;
    readonly payload: {
        getUserDataRequest: false,
        getUserDataSuccess: false,
    }
}

export interface IUpdateUserData {
    readonly type: typeof UPDATE_USER_DATA;
    readonly payload: {
        updateUserDataRequest: true,
    }
}

export interface IUpdateUserDataSuccess {
    readonly type: typeof UPDATE_USER_DATA_SUCCES;
    readonly payload: {
        updateUserDataRequest: false,
        updateUserDataSuccess: true,
        userInfo: {
            email: string,
            name: string
        }
    }
}

export interface IUpdateUserDataError {
    readonly type: typeof UPDATE_USER_DATA_ERROR;
    readonly payload: {
        updateUserDataRequest: false,
        updateUserDataSuccess: false
    }
}

export interface IRequestLogout {
    readonly type: typeof REQUEST_LOGOUT;
    readonly payload: {
        logoutRequest: true
    }
}

export interface IRequestLogoutSuccess {
    readonly type: typeof REQUEST_LOGOUT_SUCCES;
    readonly payload: {
        isAuthorised: false,
        logoutRequest: false,
        logoutSuccess: true
    }
}

export interface IRequestLogoutError {
    readonly type: typeof REQUEST_LOGOUT_ERROR;
    readonly payload: {
        logoutRequest: false,
        logoutSuccess: false
    }
}

export type TAuthActions = IRegistrationRequest | IRegistrationSuccess | IRegistrationError | ILoginRequest |
ILoginSuccess | ILoginError | IForgotPassword | IForgotPasswordSuccess | IForgotPasswordError | IRequestNewPassword |
IResetPasswordSuccess | IResetPasswordError | ISetAuthorised | ISetUnAuthorised | IGetUserData | IGetUserDataSuccess |
IGetUserDataError | IUpdateUserData | IUpdateUserDataSuccess | IUpdateUserDataError | IRequestLogout |
IRequestLogoutSuccess | IRequestLogoutError;

export const requestRegistration = (formData : {
    name: string,
    email: string,
    password: string
}) => async (dispatch: AppDispatch) => {

    dispatch({
        type: REGISTRATION_REQUEST,
        payload: {
            registrationRequest: true
        }
    })

    let response: any = await userAPI.register(formData);
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

export const requestLogin = (formData : {
    email: string,
    password: string
}) => async (dispatch: AppDispatch) => {

    dispatch({
        type: LOGIN_REQUEST,
        payload: {
            loginRequest: true
        }
    })

    let response: any = await userAPI.login(formData);
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

export const requestNewPassword = (formData : {
    email: string
}) => async (dispatch: AppDispatch) => {

    dispatch({
        type: FORGOT_PASSWORD,
        payload: {
            forgotPasswordRequest: true,
        }
    })

    let response: any = await userAPI.requestPasswordReset(formData);
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

export const resetPassword = (formData : {
    password: string,
    token: string
}) => async (dispatch: AppDispatch) => {

    dispatch({
        type: REQUEST_NEW_PASSWORD,
        payload: {
            resetPasswordRequest: true,
        }
    })

    let response: any = await userAPI.resetPassword(formData);
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

export const getUserData = () => async (dispatch: AppDispatch) => {

    dispatch({
        type: GET_USER_DATA,
        payload: {
            getUserDataRequest: true,
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse: any = await userAPI.updateToken()
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

    let response: any = await userAPI.getUserData();
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

export const updateUserData = (formData: {
    name?: string,
    email?: string,
    password?: string
}) => async (dispatch: AppDispatch) => {

    dispatch({
        type: UPDATE_USER_DATA,
        payload: {
            updateUserDataRequest: true,
        }
    })

    if (!getCookie('token')) {
        let newTokenResponse: any = await userAPI.updateToken()
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

    let response: any = await userAPI.patchUserData(formData);
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

export const userLogout = () => async (dispatch: AppDispatch) => {

    dispatch({
        type: REQUEST_LOGOUT,
        payload: {
            logoutRequest: true,
        }
    })

    let response: any = await userAPI.logout();
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
