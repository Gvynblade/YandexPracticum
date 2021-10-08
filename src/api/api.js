import { getCookie } from '../utils/cookie'

const APIUrlIngredients = 'https://norma.nomoreparties.space/api/ingredients'

const APIUrlOrders = 'https://norma.nomoreparties.space/api/orders'
const APIUrlOrdersAll = 'https://norma.nomoreparties.space/api/orders/all'

const APIUrlRegister = 'https://norma.nomoreparties.space/api/auth/register'
const APIUrlLogin = 'https://norma.nomoreparties.space/api/auth/login'
const APIUrlLogout = 'https://norma.nomoreparties.space/api/auth/logout'
const APIUrlRequestPasswordReset = 'https://norma.nomoreparties.space/api/password-reset'
const APIUrlResetPAssword = 'https://norma.nomoreparties.space/api/password-reset/reset'
const APIUrlUpdateToken = 'https://norma.nomoreparties.space/api/auth/token'
const APIUrlUserData = 'https://norma.nomoreparties.space/api/auth/user'

export const ingredientsAPI = {

    async requestIngredients () {
        try {
            let response = await fetch (APIUrlIngredients, {withCredentials: true})
            response = await response.json()
            return {
                success: true,
                data: response.data
            }
        } catch (error) {
            console.log(error);
            return {
                success: false,
                error
            }
        }
    },
}

export const ordersAPI = {

    async postOrder (payload) {
        try {
            let response = await fetch (APIUrlOrders, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: 'Bearer ' + getCookie('token')
                },
                body: JSON.stringify({
                    "ingredients" : payload
                })
            })
            response = await response.json()
            return {
                ...response
            }
        } catch (error) {
            console.log(error);
        }
    },
    async getUserOrders (payload) {
        try {
            let response = await fetch (APIUrlOrders, {
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: 'Bearer ' + getCookie('token')
                },
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async getALLOrders (payload) {
        try {
            let response = await fetch (APIUrlOrdersAll, {
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: 'Bearer ' + getCookie('token')
                },
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },

}

export const userAPI = {

    async login (payload) {
        try {
            let response = await fetch (APIUrlLogin, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async logout () {
        try {
            let response = await fetch (APIUrlLogout, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    token: localStorage.getItem('refreshToken')
                })
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async register (payload) {
        try {
            let response = await fetch (APIUrlRegister, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async requestPasswordReset (payload) {
        try {
            let response = await fetch (APIUrlRequestPasswordReset, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async resetPassword (payload) {
        try {
            let response = await fetch (APIUrlResetPAssword, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(payload)
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async updateToken () {
        try {
            let response = await fetch (APIUrlUpdateToken, {
                method: 'POST',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify({
                    token: localStorage.getItem('refreshToken')
                })
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async getUserData () {
        try {
            let response = await fetch (APIUrlUserData, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: 'Bearer ' + getCookie('token')
                }
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },
    async patchUserData (payload) {
        try {
            let response = await fetch (APIUrlUserData, {
                method: 'PATCH',
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    Authorization: 'Bearer ' + getCookie('token')
                },
                body: JSON.stringify(payload)
            })
            response = await response.json()
            return response
        } catch (error) {
            console.log(error);
        }
    },

}
