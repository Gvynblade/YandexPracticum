import reducer, {initialState} from './auth'
import * as types from '../actions/auth'

describe('auth reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initialState
        )
    })

    it('should handle REGISTRATION_REQUEST', () => {
        expect(
            reducer(undefined, {
                type: types.REGISTRATION_REQUEST,
                payload: {
                    registrationRequest: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                registrationRequest: true
            }
        )
    })

    it('should handle REGISTRATION_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.REGISTRATION_SUCCESS,
                payload: {
                    isAuthorised: true,
                    userInfo: {
                        email: 'test@mail.com',
                        name: 'testUser'
                    },
                    registrationRequest: false,
                    registrationSuccess: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                isAuthorised: true,
                userInfo: {
                    email: 'test@mail.com',
                    name: 'testUser'
                },
                registrationRequest: false,
                registrationSuccess: true
            }
        )
    })
    //
    it('should handle REGISTRATION_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.REGISTRATION_ERROR,
                payload: {
                    registrationRequest: false,
                    registrationSuccess: false
                }
            })
        ).toEqual(
            {
                ...initialState,
                registrationRequest: false,
                registrationSuccess: false,
            }
        )
    })

    it('should handle LOGIN_REQUEST', () => {
        expect(
            reducer(undefined, {
                type: types.LOGIN_REQUEST,
                payload: {
                    loginRequest: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                loginRequest: true
            }
        )
    })


    it('should handle LOGIN_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.LOGIN_SUCCESS,
                payload: {
                    isAuthorised: true,
                    userInfo: {
                        email: 'test@mail.com',
                        name: 'testUser'
                    },
                    loginRequest: false,
                    loginSuccess: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                isAuthorised: true,
                userInfo: {
                    email: 'test@mail.com',
                    name: 'testUser'
                },
                loginRequest: false,
                loginSuccess: true
            }
        )
    })

    it('should handle LOGIN_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.LOGIN_ERROR,
                payload: {
                    loginRequest: false,
                    loginSuccess: false
                }
            })
        ).toEqual(
            {
                ...initialState,
                loginRequest: false,
                loginSuccess: false
            }
        )
    })

    it('should handle FORGOT_PASSWORD', () => {
        expect(
            reducer(undefined, {
                type: types.FORGOT_PASSWORD,
                payload: {
                    forgotPasswordRequest: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                forgotPasswordRequest: true
            }
        )
    })

    it('should handle FORGOT_PASSWORD_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.FORGOT_PASSWORD_SUCCESS,
                payload: {
                    forgotPasswordSuccess: true,
                    forgotPasswordRequest: false,
                    isResetPaswordRequested: true
                }
            })
        ).toEqual(
            {
                ...initialState,
                forgotPasswordSuccess: true,
                forgotPasswordRequest: false,
                isResetPaswordRequested: true
            }
        )
    })

    it('should handle FORGOT_PASSWORD_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.FORGOT_PASSWORD_ERROR,
                payload: {
                    forgotPasswordRequest: false,
                    forgotPasswordSuccess: false
                }
            })
        ).toEqual(
            {
                ...initialState,
                forgotPasswordRequest: false,
                forgotPasswordSuccess: false
            }
        )
    })

    it('should handle REQUEST_NEW_PASSWORD', () => {
        expect(
            reducer(undefined, {
                type: types.REQUEST_NEW_PASSWORD,
                payload: {
                    resetPasswordRequest: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                resetPasswordRequest: true,
            }
        )
    })

    it('should handle RESET_PASSWORD_SUCCESS', () => {
        expect(
            reducer(undefined, {
                type: types.RESET_PASSWORD_SUCCESS,
                payload: {
                    resetPasswordRequest: false,
                    resetPasswordSuccess: true,
                    isResetPaswordRequested:false
                }
            })
        ).toEqual(
            {
                ...initialState,
                resetPasswordRequest: false,
                resetPasswordSuccess: true,
                isResetPaswordRequested:false
            }
        )
    })

    it('should handle RESET_PASSWORD_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.RESET_PASSWORD_ERROR,
                payload: {
                    resetPasswordRequest: false,
                    resetPasswordSuccess: false
                }
            })
        ).toEqual(
            {
                ...initialState,
                resetPasswordRequest: false,
                resetPasswordSuccess: false
            }
        )
    })

    it('should handle SET_AUTHORISED', () => {
        expect(
            reducer(undefined, {
                type: types.SET_AUTHORISED,
                payload: {
                    isAuthorised: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                isAuthorised: true,
            }
        )
    })

    it('should handle SET_NO_AUTHORISED', () => {
        expect(
            reducer(undefined, {
                type: types.SET_NO_AUTHORISED,
                payload: {
                    isAuthorised: false,
                }
            })
        ).toEqual(
            {
                ...initialState,
                isAuthorised: false,
            }
        )
    })

    it('should handle GET_USER_DATA', () => {
        expect(
            reducer(undefined, {
                type: types.GET_USER_DATA,
                payload: {
                    getUserDataRequest: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                getUserDataRequest: true,
            }
        )
    })

    it('should handle GET_USER_DATA_SUCCES', () => {
        expect(
            reducer(undefined, {
                type: types.GET_USER_DATA_SUCCES,
                payload: {
                    getUserDataRequest: false,
                    getUserDataSuccess: true,
                    userInfo: {
                        email: 'test@mail.com',
                        name: 'testUser'
                    },
                }
            })
        ).toEqual(
            {
                ...initialState,
                getUserDataRequest: false,
                getUserDataSuccess: true,
                userInfo: {
                    email: 'test@mail.com',
                    name: 'testUser'
                },
            }
        )
    })

    it('should handle GET_USER_DATA_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.GET_USER_DATA_ERROR,
                payload: {
                    getUserDataRequest: false,
                    getUserDataSuccess: false,
                }
            })
        ).toEqual(
            {
                ...initialState,
                getUserDataRequest: false,
                getUserDataSuccess: false,
            }
        )
    })

    it('should handle UPDATE_USER_DATA', () => {
        expect(
            reducer(undefined, {
                type: types.UPDATE_USER_DATA,
                payload: {
                    updateUserDataRequest: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                updateUserDataRequest: true,
            }
        )
    })

    it('should handle UPDATE_USER_DATA_SUCCES', () => {
        expect(
            reducer(undefined, {
                type: types.UPDATE_USER_DATA_SUCCES,
                payload: {
                    updateUserDataRequest: false,
                    updateUserDataSuccess: true,
                    userInfo: {
                        email: 'test@mail.com',
                        name: 'testUser'
                    },
                }
            })
        ).toEqual(
            {
                ...initialState,
                updateUserDataRequest: false,
                updateUserDataSuccess: true,
                userInfo: {
                    email: 'test@mail.com',
                    name: 'testUser'
                },
            }
        )
    })

    it('should handle UPDATE_USER_DATA_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.UPDATE_USER_DATA_ERROR,
                payload: {
                    updateUserDataRequest: false,
                    updateUserDataSuccess: false,
                }
            })
        ).toEqual(
            {
                ...initialState,
                updateUserDataRequest: false,
                updateUserDataSuccess: false,
            }
        )
    })

    it('should handle REQUEST_LOGOUT', () => {
        expect(
            reducer(undefined, {
                type: types.REQUEST_LOGOUT,
                payload: {
                    logoutRequest: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                logoutRequest: true,
            }
        )
    })

    it('should handle REQUEST_LOGOUT_SUCCES', () => {
        expect(
            reducer(undefined, {
                type: types.REQUEST_LOGOUT_SUCCES,
                payload: {
                    isAuthorised: false,
                    logoutRequest: false,
                    logoutSuccess: true,
                }
            })
        ).toEqual(
            {
                ...initialState,
                isAuthorised: false,
                logoutRequest: false,
                logoutSuccess: true,
            }
        )
    })

    it('should handle REQUEST_LOGOUT_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.REQUEST_LOGOUT_ERROR,
                payload: {
                    logoutRequest: false,
                    logoutSuccess: false,
                }
            })
        ).toEqual(
            {
                ...initialState,
                logoutRequest: false,
                logoutSuccess: false,
            }
        )
    })

})
