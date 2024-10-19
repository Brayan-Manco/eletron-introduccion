import prisma from "../../client"
import { handleError } from "../../utils"
import { CreteateSaleDetails } from "./SaleDetails.dto"



export const createSaleDetails = async(id: string,  saleDetails: CreteateSaleDetails[]) => {
    try {
        const resp = await prisma.salesDetail.createMany({
            data: saleDetails.map((sale) => ({
                saleId: id,
                productId: sale.productId,
                quantity: sale.quantity,
                price: sale.price,
                subtotal: sale.subtotal,
            }))
        })
        return resp;
    } catch (err) {
        handleError(err)
    }
}