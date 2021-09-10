const APIUrlIngredients = 'https://norma.nomoreparties.space/api/ingredients'
const APIUrlOrders = 'https://norma.nomoreparties.space/api/orders'

export const ingredientsAPI = {

    async requestIngredients (setter) {
        try {
            const response = await fetch (APIUrlIngredients, {withCredentials: true})
            const data = await response.json()
            setter(data.data)
        } catch (error) {
            console.log(error);
        }
    },
}

export const ordersAPI = {

    async postOrder (payload, data, setter) {
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
            setter({
                ...data,
                orderID: response.order.number
            })
        } catch (error) {
            console.log(error);
        }
    },

}
