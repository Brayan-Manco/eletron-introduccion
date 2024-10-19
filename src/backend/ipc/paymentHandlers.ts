import { ipcMain } from "electron";
import { CreatePayment } from '../controllers/payment/Payment.dto'
import { createPay } from "../controllers/payment/PaymentController";


export function setupPaymentHandlers (){
    ipcMain.handle('createPay', async(event, id: string, total: number) => {
        return await createPay(id,  total)

    });
}