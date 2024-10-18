import { ipcMain } from "electron";
import { CreatePayment } from "../controllers/paymentMethod/PaymentMethod.dto";
import { createPayment, deletePayment, getPayment, getPayments, updatePayment } from "../controllers/paymentMethod/PaymentMethodController";


export function setupHandlersPaymentMethod(){
    ipcMain.handle('createPayment',  async (event, payment: CreatePayment) => {
        return createPayment(payment);
    });
    ipcMain.handle('getPayments',  async (event) => {
        return await getPayments();
    });
    ipcMain.handle('getPayment',   async (event, id: string) => {
        return await getPayment(id);
    });
    ipcMain.handle('updatePayment',  async (event, id: string, payment: CreatePayment) => {
        return await updatePayment(id, payment);
    });
    ipcMain.handle('deletePayment',   async (event, id: string) => {
        return await deletePayment(id);
    });
}