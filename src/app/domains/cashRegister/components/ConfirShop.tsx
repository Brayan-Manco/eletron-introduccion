import { useEffect, useState } from "react";
import { Button } from "../../../components/Button/Button";
import { Producto } from "./interface/product.interface";
import { Select } from "../../../components/Select/Select";
import { ListItem } from "./ListItem";
import { formatSelectOptions } from "../../../utils/formatSelectOptions";

interface ConfirProps {
  listShop: Producto[],
  setOpen: (value: boolean) => void;
  setListShop: (productos: Producto[]) => void;
  saleId: string;
}
export const ConfirShop = ({ listShop, setOpen, setListShop, saleId }:ConfirProps) => {

  const [ payment, setPayment] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState<string>('');

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPayment(e.target.value);
  };

  const getPayments = async() => {
    try {
      const resp = await window.api.getPayments();
      const formattedData = formatSelectOptions(resp, 'name', 'id')
      setPayment(formattedData);
    } catch (err){
      console.log(err)
    }
  }

  const total = listShop.reduce((sum, producto) => sum + producto.price * producto.quantity, 0);

  const handleConfirm = async() => {
    try {
      const formatedList =  listShop.map((producto) => {
        return {
          productId:  producto.id,
          price: producto.price,
          quantity: producto.quantity,
          subtotal:  producto.price * producto.quantity
        }
      })
      await window.api.createSaleDetails(saleId, formatedList);
      const payment = await window.api.createPay(selectedPayment, total);
      const sale = await window.api.updateSale(saleId, payment.id , total);
      console.log(sale);
      setListShop([]);     
      setOpen(false);
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancel = () =>{
    setOpen(false);
  }

  useEffect(() =>{
    getPayments();
  },[])

  return (
    <div>
          <h2 style={{
            marginTop: 0,
            color: '#333',
            borderBottom:  '2px solid #e0e0e0',
          }}>Resumen de Compra</h2>
          <ListItem
            list={listShop}
          />
          <div style={{
            marginTop: '20px',
            fontSize: '1.2em',
            textAlign: 'right',
            padding: '10px',
            backgroundColor: '#e8f5e9',
            borderRadius: '6px',
          }}>
            <strong>Total:</strong> <span>${total.toFixed(2)}</span>
            <Select 
              id="payment"
              name="payment"
              options={payment}
              value={selectedPayment}
              onChange={handlePaymentChange}
              label="Método de Pago"
              placeholder="Seleccione un método de pago"
            />
          </div>
            <Button 
              name="Confirmar y Nueva Compra"
              variant="green" 
              full 
              onClick={handleConfirm}          
            />
            <Button 
              name="Cancelar"
              variant="red" 
              full 
              onClick={handleCancel}          
            />
        </div>
  )
}
