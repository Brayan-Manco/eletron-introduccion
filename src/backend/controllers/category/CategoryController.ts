import prisma from "../../client";
import { handleError } from "../../utils";
import { CreateCategory, UpdateCategory } from "./Category-dto";

export const CreateCate = async(category: CreateCategory) => {
    try {
        const resp = await prisma.category.create({
            data: {
                name: category.name
            }
        }) 
        return resp;
    } catch(err){
        console.log(err)
    }
}

export const getCategories = async() =>{
    try {
        const category = await prisma.category.findMany()
        return category;
    } catch( err){
        console.log(err)
    }
}

export const getCategory = async(id: string) =>{
    try {
        const cate = await prisma.category.findUnique({ where: { id } });
    
        if (!cate) {
          throw new Error("usuario no encontrado");
        }
        return cate
    } catch (err) {
        handleError(err);
    }
}

export const updateCate = async( id: string,  category: UpdateCategory) => {

    getCategory(id);

    try {
        const resp = await prisma.category.update({
            where: { id },
                data: {
                    name: category.name
                }
            })
        return resp;
    } catch(err){
        console.log(err)
    }
}

export const deleteCategory = async(id: string) => {
    getCategory(id);
    
    try {
        const res = await prisma.category.delete({where:  {id}})
        return res;
    } catch (err){
        handleError(err)
    }
}
