import { ipcMain } from 'electron'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/product/ProductController'
import { CreateProduct, UpdateProduct } from '../controllers/product/Product-dto'

export function setupProductHandlers() {
    ipcMain.handle('createProduct', async (event, product:CreateProduct) =>{
        return await createProduct(product)
    }),
    ipcMain.handle('getProducts', async(event)=>{
        return await getProducts();
    }),
    ipcMain.handle('getProduct', async(event, id: string) =>{
        return await getProduct(id);
    }),
    ipcMain.handle('updateProduct', async(event, id: string, product: UpdateProduct )=> {
        return await updateProduct(id, product);
    }),
    ipcMain.handle('deleteProduct', async(event,  id: string) =>{
        return await deleteProduct(id);
    })
}