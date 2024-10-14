export interface CreateProduct {
    name : string,
    price: number,
    description: string,
    image: string,
    stock: number,
    categoryId: string,
}

export interface UpdateProduct {
    name : string,
    price: number,
    description: string,
    image: string,
    stock: number,
    categoryId: string,
}