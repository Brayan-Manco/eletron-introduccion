import { useEffect, useState } from "react";
import { Button } from "../../../components/Button";
import { Table } from "../../../components/Table";
import { CreateUpdateCategory } from "./Create-Update.Category";
import { ModalUi } from "../../../components/Modal/Modal";

type Category = {
    id: string,
    name: string
}

interface  ListProps {
  refreshCategories: boolean;
}


export const ListCategory = ({ refreshCategories }: ListProps) => {

    const [ categories, setCategories] = useState<Category[]>([]);
    const [ createIsOpen, setCreateIsOpen ] = useState(false);
    const [ categoryId, setIsCategory] = useState("");

    function closeModal() {
      setCreateIsOpen(false);
    }

    const handleButtonUpdate = ( id: string ) => {
      setIsCategory(id)
      setCreateIsOpen(true);
    }

    const handleDelete = async (id: string) => {
      try {
        await window.api.deleteCategory(id)
        setCategories(categories.filter(categories => categories.id !== id))
        alert('Borrado')
      }catch (err){
        alert('Error')
        console.log(err)
      }
    }


    const columns: Array<keyof Category> = ['name'];

    const getCategories =  async () => { 
      try {
        const response = await window.api.getCategories();
        setCategories(response);
        console.log(response)
      } catch(err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getCategories();
    }, [refreshCategories])
    


  return (
    <div 
      style={{
        width:"100%"
      }}
    >
        <Table  
          columns={columns} 
          data={categories}
          renderActions={(categories) =>(
            <>
              <Button 
                name="Eliminar"
                variant="red"
                onClick={() => handleDelete(categories.id)}
                />
              <Button 
                name="Actualizar"
                onClick={() => handleButtonUpdate(categories.id)}
                /> 
            </>
          )}  
        />
        <ModalUi 
          isOpen={createIsOpen}
          onRequestClose={closeModal}
        >
          <CreateUpdateCategory 
            categoryId={categoryId} 
            onSuccess={() => {
              getCategories();
              closeModal();
            }}
          />
      </ModalUi>
    </div>
  )
}
