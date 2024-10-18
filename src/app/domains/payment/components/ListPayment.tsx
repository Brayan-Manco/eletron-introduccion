import { Button } from "../../../components/Button";
import { ModalUi } from "../../../components/Modal/Modal";
import { Table } from "../../../components/Table";
import { useEffect, useState } from "react";
import { CreateUpdatePayment } from "./Create-Update.Payment";


type Payment = {
    id: string,
    name: string
}

interface  ListProps {
  setRefreshPayment: boolean;
}



export const ListPayment = ({ setRefreshPayment }: ListProps) => {


    const [ payment, setPayment] = useState<Payment[]>([]);
    const [ createIsOpen, setCreateIsOpen ] = useState(false);
    const [ paymentId, setPaymentId] = useState("");

    function closeModal() {
      setCreateIsOpen(false);
    }

    const handleButtonUpdate = ( id: string ) => {
      setPaymentId(id)
      setCreateIsOpen(true);
    }

    const handleDelete = async (id: string) => {
      try {
        await window.api.deletePayment(id)
        setPayment(payment.filter(payment => payment.id !== id))
        alert('Borrado')
      }catch (err){
        alert('Error')
        console.log(err)
      }
    }
    const columns: Array<keyof Payment> = ['name'];

    const getPayment =  async () => { 
      try {
        const response = await window.api.getPayments();
        setPayment(response);
      } catch(err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getPayment();
    }, [setRefreshPayment])
    


  return (
    <div 
      style={{
        width:"100%"
      }}
    >
        <Table  
          columns={columns} 
          data={payment}
          renderActions={(payment) =>(
            <>
              <Button 
                name="Eliminar"
                variant="red"
                onClick={() => handleDelete(payment.id)}
                />
              <Button 
                name="Actualizar"
                onClick={() => handleButtonUpdate(payment.id)}
                /> 
            </>
          )}  
        />
        <ModalUi 
          isOpen={createIsOpen}
          onRequestClose={closeModal}
        >
          <CreateUpdatePayment
            paymentId={paymentId} 
            onSuccess={() => {
              getPayment();
              closeModal();
            }}
          />
      </ModalUi>
    </div>
  )
}
