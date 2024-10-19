import { useEffect, useState } from 'react';
import './ListShop.css'
import { formatDate } from '../../../utils/dateUtils';


type Sales = {
    salesDetails: {
      id: string;
      saleId: string;
      productId: string;
      quantity: number;
      price: number;
      subtotal: number;
      product:{
        name: string
      }
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
    detailId:  string;
}
export const ListShop = ({ detailId  }:  listProps) => {

  const getSaleId = async (id: string) => {
    try {
      const resp = await window.api.getSale(id);

      if (resp) {
        const formatedSale: Sales = {

          ...resp,
          Fecha: formatDate(resp.createdAt),
          Total: resp.total,
          Pago: resp.payment.method.name,
          Identificador: resp.id,
          Productos: resp.salesDetails.reduce((acc: number, detail: { quantity: number }) => acc + detail.quantity, 0),
        };
        setListShop([formatedSale]);
      } else {
        console.log('Sale not found');
      }
    } catch (err) {
      console.log(err)
    }
  }

  const  [listShop, setListShop] = useState<Sales[]>([]);



  useEffect(() =>{
    getSaleId(detailId)
  })
  return (
    <div className="sale-details">
      {listShop.map((sale) =>(
        <div key={sale.id}>
          <h2 className="sale-title">Detalle de la compra</h2>
          <div className="sale-info">
            <div className="info-item">
              <span className="info-label">Codigo:</span>
              <span className="info-value">{sale.id}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date:</span>
              <span className="info-value">{sale.Fecha}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Customer:</span>
              <span className="info-value">22222222</span>
            </div>
          </div>
          <div className="products-table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {sale.salesDetails.map((product) => (
                  <tr key={product.id}>
                    <td>{product.product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>{product.quantity}</td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sale-summary">
            <div className="summary-item">
              <span className="summary-label">Subtotal:</span>
              <span className="summary-value">${sale.Total.toFixed(2)}</span>
            </div>
            {/* <div className="summary-item">
              <span className="summary-label">Tax (16%):</span>
              <span className="summary-value">${tax.toFixed(2)}</span>
            </div> */}
            <div className="summary-item total">
              <span className="summary-label">Total:</span>
              <span className="summary-value">${sale.Total.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Pago:</span>
              <span className="summary-value">{sale.Pago}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
