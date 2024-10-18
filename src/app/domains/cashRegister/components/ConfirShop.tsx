import { useState } from "react";
import { Button } from "../../../components/Button";
import { Producto } from "./interface/product.interface";
import { ListItem } from "./ListItem";

interface ConfirProps {
  listShop: Producto[],
  setOpen: (value: boolean) => void;
  setListShop: (productos: Producto[]) => void;
}
export const ConfirShop = ({ listShop, setOpen, setListShop }:ConfirProps) => {

  const total = listShop.reduce((sum, producto) => sum + producto.price * producto.quantity, 0);
  const handleConfirm = () => {
    setOpen(false);
    setListShop([]);
  }

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
          </div>
            <Button 
              name="Confirmar y Nueva Compra"
              variant="green" 
              full 
              onClick={handleConfirm}          
            />
        </div>
  )
}
