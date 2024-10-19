type Sales = {
    salesDetails: {
      id: string;
      saleId: string;
      productId: string;
      quantity: number;
      price: number;
      subtotal: number;
    }[];
    payment: {
      id: string;
      amount: number;
      method: {
        id: string;
        name: string;
      };
      methodId: string;
    };
    id: string;
    createdAt: Date;
    total: number;
    paymentId: string;
    Fecha: string;
    Total: number;
    Identificador: string;
    Pago: string;
  };
  
interface listProps {
    listShop:  Sales[];
}
export const ListShop = ({ listShop }:  listProps) => {

  console.log(listShop);

  return (
    <div>
        
    </div>
  )
}
