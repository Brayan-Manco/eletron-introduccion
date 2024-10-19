import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { ListProduct } from "./components/ListProduct";
import { ModalUi } from "../../components/Modal/Modal";
import { CreateUpdateproduct } from "./components/Create-Update.product";
import { Heading } from "../../components/Heading/Heading";


export const ProductsPage = () => {

  const [ createIsOpen, setCreateIsOpen ] = useState(false);
  const [ refreshProduct, setRefreshProduct ] = useState(false);

  function closeModal() {
    setCreateIsOpen(false);
  }

  const handleButton = () => {
    setCreateIsOpen(true);
  }

  return (
    <div  style={{ padding: '20px'}}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
      }}>
        <Heading  title="Productos" />
        <Button
            name={"Crear"}
            variant="blue"
            type="button"
            onClick={handleButton}
          />
      </div>
      <div>
        <ListProduct refreshProduct={refreshProduct}/>
      </div>
      <ModalUi 
        isOpen={createIsOpen}
        onRequestClose={closeModal}
      >
       <CreateUpdateproduct
        onSuccess={()=> {
          setCreateIsOpen(false)
          setRefreshProduct(!refreshProduct)
        }}
       />
      </ModalUi>
    </div>
  )
}