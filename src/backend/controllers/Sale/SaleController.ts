import prisma from "../../client"
import { handleError } from "../../utils"

export const createSale = async() =>{
    try {
        const resp = await prisma.sale.create({
            data: {
                total: 0
            }
        })
        return resp;
    } catch (err){
        handleError(err)
    }
}

export const getSales = async() =>{
    try {
        const resp = await prisma.sale.findMany({
            include: {
                salesDetails: {
                    include: {
                        product: true
                    }
                },
                payment: {
                    include: {
                        method:true
                    }
                }
            }
        })
        return resp
    } catch (err) {
        handleError(err)
    }
}

export const getSale = async(id: string) => {
    try {
        const resp = await prisma.sale.findUnique({
            where: { id },
            include: {
                salesDetails: {
                    include: {
                        product: true
                    }
                },
                payment: {
                    include: {
                        method:true
                    }
                }
            }
        })
        if(!resp) throw new Error('Sale not found')
        return resp;
    } catch (err) {
        handleError(err)
        console.log(err)
    }
}


export const updateSale = async(id: string, paymentId: string, total: number) =>{
    try {
        
        const payment = await prisma.payment.findUnique({
            where: { id: paymentId },
          });
      
          if (!payment) {
            throw new Error(`Payment with id ${paymentId} does not exist.`);
          }
      
        const resp = await prisma.sale.update({
            where: { id },
                data:{
                    paymentId,
                    total,
                }
        })
        return resp;
    } catch (error) {
        handleError(error)
        throw error;
    }
}