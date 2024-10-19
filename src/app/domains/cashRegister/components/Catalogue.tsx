import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button/Button";
import { Producto } from "./interface/product.interface";
import { ListItem } from "./ListItem";
import { Dispatch, SetStateAction, useState } from "react";

interface BusquedaProductosProps {
  products: Producto[];
  setListShop:  Dispatch<SetStateAction<Producto[]>>;
  listShop:  Producto[];
}
export const Catalogue = ({
    products,
    setListShop,
    listShop,
}:  BusquedaProductosProps) => {

  const [search, setSearch] = useState<string>("");

  const productosFiltrados = products.filter(producto =>
    producto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = ( event:  React.ChangeEvent<HTMLInputElement> ) => {
    setSearch(event.target.value);
  }

  const  handleAddProduct = (producto: Producto) => { 
    const productExist  = listShop.find(item => item.id === producto.id);
    if(productExist){
      const updatedList = listShop.map(item => 
        item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    setListShop(updatedList)
    } else {
      setListShop([...listShop, { ...producto,  quantity: 1 }]);
    }
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
      <h2 style={{
        marginTop: 0,
        color:  '#333',
        fontSize: '20px',
        marginBottom:  '20px',
        borderBottom:  '2px solid #e0e0e0',
        padding:  '10px',
      }}>Catálogo de Productos</h2>
      <Input
        id="search"
        name="search"
        type="text"
        onChange={handleSearch}
        placeholder="Buscar producto..."
        value={search}
        state
      />
      <ListItem
        list={productosFiltrados}
        renderActions={(producto) =>(
          <Button 
              onClick={() => handleAddProduct(producto)} 
              variant="green" 
              name="+"
            />
        )}
      />

    </div>
  );
}
