const APIUrlIngredients = 'https://norma.nomoreparties.space/api/ingredients'
const APIUrlOrders = 'https://norma.nomoreparties.space/api/orders'

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
                    'Content-Type': 'application/json;charset=utf-8'
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

}
