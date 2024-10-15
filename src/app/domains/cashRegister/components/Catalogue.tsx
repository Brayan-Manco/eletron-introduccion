import { Button } from "../../../components/Button";

interface Producto {
    id: number;
    name: string;
    price: number;
    img: string;
    stock: number;
  }

interface BusquedaProductosProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  productsFilter: Producto[];
  addProduct: (producto: Producto) => void;
}
export const Catalogue = ({
    search,
    setSearch,
    productsFilter,
    addProduct,
}:  BusquedaProductosProps) => {

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
      <h2 style={{
        marginTop: 0,
        color:  '#333',
        fontSize: '20px',
        marginBottom:  '20px',
        borderBottom:  '2px solid #e0e0e0',
        padding:  '10px',
      }}>Catálogo de Productos</h2>
      <input style={{
        width: '100%',
        padding: '12px',
        marginBottom:  '20px',
        border:   '1px solid #ddd',
        borderRadius:   '6px',
        transition: 'border-color 0.3s'
      }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar producto..."
      />
      <ul style={{
        listStyle: 'none',
        padding: 0,
      }}>
        {productsFilter.map(producto => (
          <li style={{
            display:  'flex',
            justifyContent:   'space-between',
            alignItems:   'center',
            padding:  '12px 0',
            borderBottom:   '1px solid #eee',
          }} key={producto.id}>
            <div style={{
              flexGrow: 1,
              marginLeft: '15px',
            }}>
              <span style={{fontWeight: 'bold', color: '#333'}}>{producto.name}</span>
              <span style={{color: '#4CAF50', fontWeight: 'bold'}}>${producto.price.toFixed(2)}</span>
            </div>
            <Button 
              onClick={() => addProduct(producto)} 
              variant="green" 
              name="+"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
