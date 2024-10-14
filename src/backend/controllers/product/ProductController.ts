import  prisma  from '../../client';
import { handleError } from '../../utils';
import { CreateProduct, UpdateProduct } from './Product-dto';

export const createProduct = async (product: CreateProduct) => {
    try {
        const CreateProduct = await prisma.product.create({
            data: {
                name: product.name,
                description: product.description,
                image: product.image,
                price: product.price,
                stock: product.stock,
                categoryId: product.categoryId
            }
        })
        return CreateProduct; 
    } catch(err){
        handleError(err);
    }
}

export const getProducts = async  () => {
    try {
        const product = await prisma.product.findMany()
        return product;
    } catch (err){
        handleError(err)
    }
}

export const getProduct = async(id: string) =>{
    try {
        const  product = await prisma.product.findUnique({where: {id}})
        if(!product){
            throw new Error('Product not found')
        }
        return product;
    } catch (err){
        handleError(err)
    }

}

export const updateProduct = async(id: string, product:UpdateProduct) =>{

    getProduct(id);
    try {
        const  updatedProduct = await prisma.product.update({
            where: {id},
                data: {
                    categoryId:  product.categoryId,
                    name: product.name,
                    description: product.description,
                    image: product.image,
                    stock:  product.stock,
                    price: product.price
                }})
        return  updatedProduct;
    } catch(err){
        handleError(err);
    }
    
}

export const deleteProduct = async( id: string) => {

    getProduct(id);

    try {
        const  deletedProduct = await prisma.product.delete({where: {id}})
        return deletedProduct;
    }catch (err){
        handleError(err);
    }

}

