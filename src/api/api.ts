import {getCookie} from '../utils/cookie'

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

    async requestIngredients() {

        let response = await fetch(APIUrlIngredients, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        response = await response.json()
        return response
    },
}

export const ordersAPI = {

    async postOrder(payload: string[]) {
        let response = await fetch(APIUrlOrders, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            },
            body: JSON.stringify({
                "ingredients": payload
            })
        })
        response = await response.json()
        return {
            ...response
        }

    },
    async getUserOrders() {
        let response = await fetch(APIUrlOrders, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            },
        })
        response = await response.json()
        return response
    },
    async getALLOrders() {
        let response = await fetch(APIUrlOrdersAll, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            },
        })
        response = await response.json()
        return response
    },

}

export const userAPI = {

    async login(payload: {
        email: string,
        password: string
    }) {
        let response = await fetch(APIUrlLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    },
    async logout() {
        let response = await fetch(APIUrlLogout, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        })
        response = await response.json()
        return response
    },
    async register(
        payload: {
            name: string,
            email: string,
            password: string
        }
    ) {
        let response = await fetch(APIUrlRegister, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    },
    async requestPasswordReset(payload: {
        email: string
    }) {
        let response = await fetch(APIUrlRequestPasswordReset, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    },
    async resetPassword(payload: {
        password: string,
        token: string
    }) {
        let response = await fetch(APIUrlResetPAssword, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    },
    async updateToken() {
        let response = await fetch(APIUrlUpdateToken, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        })
        response = await response.json()
        return response
    },
    async getUserData() {
        let response = await fetch(APIUrlUserData, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            }
        })
        response = await response.json()
        return response
    },
    async patchUserData(payload: {
        name?: string,
        email?: string,
        password?: string
    }) {
        let response = await fetch(APIUrlUserData, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                Authorization: 'Bearer ' + getCookie('token')
            },
            body: JSON.stringify(payload)
        })
        response = await response.json()
        return response
    },

}
