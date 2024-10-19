import { ipcMain } from "electron";
import { CreateSale } from "../controllers/Sale/Sale.dto"
import { createSale, getSales, updateSale } from "../controllers/Sale/SaleController";

export function setupSaleHandler () {
    ipcMain.handle('createSale', async(event) => {
        return await createSale();
    });
    ipcMain.handle('getSales', async(event) => {
        return await getSales();
    });
    ipcMain.handle('updateSale', async(event, id: string, paymentId: string, total: number) =>{
        return await updateSale(id, paymentId, total);
    });
}