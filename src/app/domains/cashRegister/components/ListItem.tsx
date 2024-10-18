import { ReactNode } from "react";
import { Producto } from "./interface/product.interface";


interface ListProps {
    list: Producto[]
    renderActions?: (item: Producto, index: number) => ReactNode
}

export const ListItem = ({ list, renderActions}: ListProps) => {
  return (
    <>
        <ul style={{
            listStyle: 'none',
            padding: 0,
        }}>
            {list.map((producto, index) => (
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
                {renderActions && renderActions(producto, index)}
            </li>
            ))}
        </ul>
    </>
  )
}
