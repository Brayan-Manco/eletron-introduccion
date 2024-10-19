import { ModalUi } from "../../../components/Modal/Modal";
import { Button } from "../../../components/Button/Button";
import { Table } from "../../../components/Table/Table";
import { formatDate } from "../../../utils/dateUtils";
import { useEffect, useState } from "react";
import { ListShop } from "./listShop";
// import { Sales } from "../interface/Sales.Interface";


type Sales = {
    salesDetails: {
        id: string;
        saleId: string;
        productId: string;
        quantity: number;
        price: number;
        subtotal: number;
    }[];
    payment: {
        id: string,
        amount: number,
        method: {
            id: string,
            name: string
        };
        methodId: string
    }
    id: string,
    createdAt: Date,
    total: number,
    paymentId: string,
    Fecha: string
    Total:  number,
    Identificador:  string,
    Pago:  string,
}


export const ListSale = () => {

    const [ history, setHistory ] = useState<Sales[]>([])
    const [ openModel, setOpenModal ] = useState(false);

    const closeModal = () => {
        setOpenModal(false)
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const  getHistory = async () => {
        try {
            const resp = await window.api.getSales()
            const formatedSales = resp.map((sale: Sales) => ({
                ...sale,
                Fecha: formatDate(sale.createdAt),
                Total:  sale.total,
                Pago: sale.payment.method.name,
                Identificador:  sale.id

            }))
            setHistory(formatedSales)
        } catch (error) {
            console.log(error)
        }
    }

    const colums: Array<keyof Sales > = ['Fecha', 'Total', 'Pago', 'Identificador']

    useEffect(()=> {
        getHistory();
    },[])


  return (
    <>
        <Table 
            columns={colums}
            data={history}
            renderActions={(sale) =>(
                <div>
                    <Button 
                        onClick={handleOpenModal}
                        name="Ver"
                    />
                </div>
            )}
        />
        <ModalUi 
            isOpen={openModel}
            onRequestClose={closeModal}
        >
            <ListShop 
                listShop={history}
            />
        </ModalUi>
    </>
  )
}
