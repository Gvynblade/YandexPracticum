const APIUrlIngredients = 'https://norma.nomoreparties.space/api/ingredients'

export const IngredientsAPI = {

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
