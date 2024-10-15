import { Button } from "../../../components/Button";


interface Producto {
    id: number;
    name: string;
    price: number;
    img: string;
    stock: number;
  }

interface ListCartProps {
    listShop: Producto[];
    deleteProduct: (index: number) => void;
    total: number;
    finishShop: () => void;
  }

export const ShoppingCart = ({
    listShop,
    deleteProduct,
    total,
    finishShop,
}:  ListCartProps) => {

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
            <ul style={{
              listStyle: 'none',
              padding: 0,
            }}>
              {listShop.map((producto, index) => (
                <li style={{
                  display:  'flex',
                  justifyContent:   'space-between',
                  alignItems:   'center',
                  padding:  '12px 0',
                  borderBottom:   '1px solid #eee',
                }} key={index}>
                  <div style={{
                    flexGrow: 1,
                    marginLeft: '15px',
                  }}>
                    <span style={{fontWeight: 'bold', color: '#333'}}>{producto.name}</span>
                    <span style={{color: '#4CAF50', fontWeight: 'bold'}}>${producto.price.toFixed(2)}</span>
                  </div>
                  <Button 
                    onClick={() => deleteProduct(index)} 
                    name="-" 
                    variant="red"
                  />
                </li>
              ))}
            </ul>
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
              onClick={finishShop} 
              disabled={listShop.length === 0}
              name="Finalizar Compra"
              full
            />
        </div>
      );
}
