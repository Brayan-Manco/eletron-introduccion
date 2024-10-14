// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { User } from '@prisma/client';
import { contextBridge, ipcRenderer } from 'electron';
import { userUpdate } from './backend/controllers/user/User-dto';
import { CreateCategory, UpdateCategory } from './backend/controllers/category/Category-dto';
import { CreateProduct, UpdateProduct } from './backend/controllers/product/Product-dto';


contextBridge.exposeInMainWorld('api', {
    // USER
    createUser: (user: User) => ipcRenderer.invoke('createUser', user),
    getUsers: () => ipcRenderer.invoke('getUsers'),
    getUser: (id: string) => ipcRenderer.invoke('getUser', id),
    deleteUser: ( id: string) => ipcRenderer.invoke('deleteUser', id),
    updateUser: (id: string, data: userUpdate) => ipcRenderer.invoke('updateUser', id, data),

    // PRODUCT
    createProduct:  (product: CreateProduct) => ipcRenderer.invoke('createProduct', product),
    getProducts: () => ipcRenderer.invoke('getProducts'),
    getProduct: (id: string) => ipcRenderer.invoke('getProduct', id),
    updateProduct: (id: string, product: UpdateProduct) => ipcRenderer.invoke('updateProduct', id, product),
    deleteProduct: (id: string) => ipcRenderer.invoke('deleteProduct', id),

    // CATEGORY
    createCategory: (category:CreateCategory) => ipcRenderer.invoke('createCategory', category),
    getCategories: () => ipcRenderer.invoke('getCategories'),
    updateCate: (id: string, category: UpdateCategory) => ipcRenderer.invoke('updateCate', id,  category),
    getCategory: (id: string) => ipcRenderer.invoke('getCategory', id),
    deleteCategory: (id: string) => ipcRenderer.invoke('deleteCategory', id),

});


