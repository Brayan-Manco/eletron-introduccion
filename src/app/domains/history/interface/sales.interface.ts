export interface Sales{
    salesDetails: {
        id: string;
        saleId: string;
        productId: string;
        quantity: number;
        price: number;
        subtotal: number;
    };
    method: {
        id: string,
        name: string
    };
    id: string,
    createdAt: Date,
    total: number,
    paymentId: string,
} 