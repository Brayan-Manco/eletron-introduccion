import { ipcMain } from "electron";
import { CreteateSaleDetails } from "../controllers/saleDetail/SaleDetails.dto";
import { createSaleDetails } from "../controllers/saleDetail/SaleDetailsController";


export function setupSaleDetailsHandlers() {
    ipcMain.handle('createSaleDetails', async(event, id: string, sale: CreteateSaleDetails[]) => {
        return await createSaleDetails(id, sale);
    });
}