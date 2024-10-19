import { ModalUi } from "../../../components/Modal/Modal";
import { Button } from "../../../components/Button/Button";
import { Table } from "../../../components/Table/Table";
import { useEffect, useState } from "react"
import { CreateUpdateproduct } from "./Create-Update.product";

interface listProps {
    refreshProduct: boolean,
}

type Product = {
    id: string,
    name : string,
    price: number,
    description: string,
    image: string,
    stock: number,
    categoryId: string,
    category: {
        id: string,
        name: string
    }
    categoria: string,
    nombre: string,
    precio:  string,
    cantidad:  string,
}


export const ListProduct = ({ refreshProduct }:  listProps) => {

    const [ products, setProducts ] = useState<Product[]>([]);
    const [ createIsOpen,  setCreateIsOpen ] = useState(false);
    const [ productId, setProductId ] = useState("");

    function closeModal() {
        setCreateIsOpen(false);
      }
  
      const handleButtonUpdate = ( id: string ) => {
        setProductId(id)
        setCreateIsOpen(true);
      }

    const  handleButtonDelete = async( id: string ) => {
        try {
            await window.api.deleteProduct(id);
            setProducts(products.filter(product => product.id !== id));
            alert('Producto  eliminado con exito')
        } catch (error) {
            alert('Error al eliminar producto')
        }
    }



    const getProduct = async() =>{
        try {
            const data = await window.api.getProducts();
            const formattedProducts = data.map((product: Product) => ({
                //se formate para obtener  los datos de la categoria
                ...product,
                nombre: product.name,
                precio: product.price,
                cantidad: product.stock,
                categoria: product.category.name,
            }));
            setProducts(formattedProducts)
            console.log(data)
        } catch (err){
            console.log(err)
        }
    }

    
    const colums: Array<keyof Product | 'categoria'> = ['nombre', 'precio', 'cantidad', 'categoria'];


    useEffect(()=>{
        getProduct()
    }, [refreshProduct])

  return (
    <div style={{
        width: '100%'
    }}>
        <Table 
            columns={colums}
            data={products}
            renderActions={(data) =>(
                <>
                    <Button 
                        name="Eliminar"
                        variant="red"
                        onClick={() => handleButtonDelete(data.id)}
                    />
                        <Button 
                        name="Actualizar"
                        onClick={() => handleButtonUpdate(data.id)}
                    />  
                </>
            )}
        />
        <ModalUi 
          isOpen={createIsOpen}
          onRequestClose={closeModal}
        >
          <CreateUpdateproduct 
            productId={productId}
            onSuccess={() =>{
                getProduct()
                closeModal()
            }}
          />
      </ModalUi>
    </div>
  )
}
