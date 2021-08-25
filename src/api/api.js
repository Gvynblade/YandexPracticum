const APIUrlIngredients = 'https://norma.nomoreparties.space/api/ingredients'

export const IngredientsAPI = {

    async requestIngredients (setter) {
        try {
            let response = await fetch (APIUrlIngredients, {withCredentials: true})
            let data = await response.json()
            setter(data.data)
        } catch (error) {
            throw new Error(error);
        }
    },
}
