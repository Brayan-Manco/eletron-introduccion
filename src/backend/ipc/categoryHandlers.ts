import { ipcMain } from "electron";
import { CreateCategory, UpdateCategory } from "../controllers/category/Category-dto";
import { CreateCate, deleteCategory, getCategories, getCategory, updateCate } from "../controllers/category/CategoryController";

export function setupCategoryHandlers() {
    ipcMain.handle('createCategory', async(event, category: CreateCategory) =>{
        return CreateCate(category);
    });
    ipcMain.handle('getCategories', async(event)=>{
        return getCategories();
    })
    ipcMain.handle('updateCate', async(event, id: string, category: UpdateCategory ) =>{
        return  updateCate( id, category);
    })
    ipcMain.handle('getCategory', async(event, id: string)=>{
        return getCategory(id);
    })
    ipcMain.handle('deleteCategory', async(event, id: string) => {
        return deleteCategory(id);
    })
}