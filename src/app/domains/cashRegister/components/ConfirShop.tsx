import { Button } from "../../../components/Button";

interface Producto {
  id: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}


interface ConfirProps {
  listShop: Producto[],

}
export const ConfirShop = ({ listShop }:ConfirProps) => {

  const total = listShop.reduce((sum, producto) => sum + producto.price, 0);

  return (
    <div>
          <h2 style={{
            marginTop: 0,
            color: '#333',
            borderBottom:  '2px solid #e0e0e0',
          }}>Resumen de Compra</h2>
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
                {/* <img src={producto.img} alt={producto.name} /> */}
                <div style={{
                    flexGrow: 1,
                    marginLeft: '15px',
                  }}>
                  <span style={{fontWeight: 'bold', color: '#333'}}>{producto.name}</span>
                  <span style={{color: '#4CAF50', fontWeight: 'bold'}}>${producto.price.toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
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
          />
        </div>
  )
}
