import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../../../components/Button";
import { Producto } from "./interface/product.interface";
import { ListItem } from "./ListItem";

interface ListCartProps {
  listShop: Producto[];
  setListShop:  Dispatch<SetStateAction<Producto[]>>;
  total: number;
  setOpen: (value: boolean) => void;
}

export const ShoppingCart = ({
    listShop,
    setListShop,
    total,
    setOpen
}:  ListCartProps) => {


  const addProducts =  (product: Producto) => {
    const updatedList = listShop.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setListShop(updatedList);
  }

  const deleteProduct = (producto: Producto) => {
    const productExist = listShop.find(item => item.id === producto.id);
    if (productExist && productExist.quantity > 1) {
      const updatedList = listShop.map(item =>
        item.id === producto.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setListShop(updatedList);
    } else {
      const filteredList = listShop.filter(item => item.id !== producto.id);
      setListShop(filteredList); 
    }
  };

  const  handleCheckout = () => {
    setOpen(true);
  }

  
    return (
        <div style={{
          flex: 1,
          background: '#ffffff',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'auto',
          height: '500px'
        }}>
          <h2
            style={{
              marginTop: 0,
              color:  '#333',
              fontSize: '20px',
              marginBottom:  '20px',
              borderBottom:  '2px solid #e0e0e0',
              padding:  '10px',
            }}
          >Carrito de Compra</h2>
          {listShop.length === 0 ? (
            <p style={{
              textAlign:  'center',
              color: '#888',
              fontStyle: 'italic'
            }}>El carrito está vacío</p>
          ) : (
            <ListItem
              list={listShop}
              renderActions={(product) =>(
                <>
                <Button 
                    onClick={() => addProducts(product)} 
                    name="+" 
                    variant="green"
                    />
                  <p style={{ marginLeft: '5px', marginRight:  '5px' }}
                  >{product.quantity}</p>
                  <Button 
                    onClick={() => deleteProduct(product)} 
                    name="-" 
                    variant="red"
                  />
                </>
              )}
            />
          )}
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
              onClick={handleCheckout} 
              disabled={listShop.length === 0}
              name="Finalizar Compra"
              full
            />
        </div>
      );
}
