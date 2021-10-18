export type TOrders = {
    success: boolean;
    orders: TOrder[],
    total: number,
    totalToday: number
}

export type TOrder = {
    ingredients: string[] | null | undefined;
    _id: string | null | undefined;
    status: string;
    number: number;
    name: string;
    createdAt: string;
    updatedAt: string
}

export type TOrderElement = {
    id: string;
    number: number;
    date: string;
    name: string;
    ingredientsImages: {name: string, image: string}[]
    price: null | number;
    status?: string
}


export type TIngredient = {
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number,
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    hash?: string;
}
