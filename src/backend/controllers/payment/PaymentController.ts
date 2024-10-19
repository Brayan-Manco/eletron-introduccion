import prisma from "../../client";
import { handleError } from "../../utils";

export const createPay = async( id: string, total: number) => {
    try {
        const resp = await prisma.payment.create({
            data: {
                amount:  total,
                methodId:  id,
            }
        })
        return resp
    } catch (err){
        handleError(err)
    }
}