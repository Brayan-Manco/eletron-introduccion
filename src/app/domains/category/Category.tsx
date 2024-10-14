import React, { useState } from 'react'
import { ListCategory } from './components/ListCategory'
import { CreateUpdateCategory } from './components/Create-Update.Category'
import { ModalUi } from '../../components/Modal/Modal';
import { Button } from '../../components/Button';

export const CategoryPage = () => {

  const [ createIsOpen, setCreateIsOpen ] = useState(false);
  const [ refreshCategories, setRefreshCategories ] = useState(false);

  function closeModal() {
    setCreateIsOpen(false);
  }

  const handleButton = () => {
    setCreateIsOpen(true);
  }

  return (
    <div style={{
      padding:  '20px',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
      }}>
        <h1>Categorias</h1>
        <Button
            name={"Crear"}
            variant="blue"
            type="button"
            onClick={handleButton}
          />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ListCategory refreshCategories={refreshCategories}/>
      </div>

      <ModalUi 
        isOpen={createIsOpen}
        onRequestClose={closeModal}
      >
        <CreateUpdateCategory 
          onSuccess={() =>{
            setCreateIsOpen(false);
            setRefreshCategories(!refreshCategories);
          }}
        />
      </ModalUi>
    </div>
    
  )
}
