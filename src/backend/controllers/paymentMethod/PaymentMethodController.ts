import prisma from "../../client"
import { handleError } from "../../utils";
import { CreatePayment, UpdatePayment } from "./PaymentMethod.dto"



export const createPayment = async( payment: CreatePayment) =>{
    try {
        const resp = await prisma.paymentMethod.create({
            data: {
                name: payment.name,
            }
        })
        return resp;
    } catch (error) {
        handleError(error)
    }
}

export const getPayments = async() =>{
    try {
        const resp = await prisma.paymentMethod.findMany()
        return resp;
    } catch (error) {
        handleError(error)
    }
}

export const getPayment = async(id: string) =>{
    try {
        const resp = await prisma.paymentMethod.findUnique({ where: { id }})
        if (!resp) {
            throw new Error("Metodo de pago no encontrado");
          }
        return resp;
    } catch (error) {
        handleError(error)
    }
}

export const updatePayment = async(id: string, payment: UpdatePayment) =>{

    getPayment(id);

    try {
        const resp = await prisma.paymentMethod.update({ 
            where: { id },
                data: {
                    name: payment.name
            }
        })
        return resp;
    } catch (error) {
        handleError(error)
    }
}
export const deletePayment = async(id: string) =>{

    getPayment(id);
    try {
        const resp = await prisma.paymentMethod.delete({ where: { id }})
        return resp;
    } catch (error) {
        handleError(error)
    }
}

