import { useState } from "react";
import { ModalUi } from "../../components/Modal/Modal";
import { CreateUpdatePayment } from "./components/Create-Update.Payment"
import { Button } from "../../components/Button";
import { ListPayment } from "./components/ListPayment";

export const PaymentPage = () => {

  const [ createIsOpen, setCreateIsOpen ] = useState(false);
  const [ refreshPayment, setRefreshPayment ] = useState(false);

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
        <h1>Metodos de pago</h1>
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
        <ListPayment setRefreshPayment={refreshPayment} />
      </div>

      <ModalUi 
        isOpen={createIsOpen}
        onRequestClose={closeModal}
      >
        <CreateUpdatePayment 
          onSuccess={() =>{
            setRefreshPayment(!refreshPayment);
            setCreateIsOpen(false);
          }}
        />
      </ModalUi>
    </div>
  )
}
