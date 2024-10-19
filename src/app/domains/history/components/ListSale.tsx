import { ModalUi } from "../../../components/Modal/Modal";
import { Button } from "../../../components/Button/Button";
import { Table } from "../../../components/Table/Table";
import { formatDate } from "../../../utils/dateUtils";
import { useEffect, useState } from "react";
import { ListShop } from "./ListShop";

export const Styles  = {
    width: '600px',
    height: '700px', 
    backgroundColor: "#F4F6FF",
    top: "20px",
    left: "30%",
    right: "50%",
    bottom: "auto",
    marginRight: "0",
    transform: "",
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  };


type Sales = {
    salesDetails: {
        id: string;
        saleId: string;
        productId: string;
        quantity: number;
        price: number;
        subtotal: number;
        product:{
            name: string
        }
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
    Productos: string,
}


export const ListSale = () => {

    const [ history, setHistory ] = useState<Sales[]>([])
    const [ openModel, setOpenModal ] = useState(false);
    const  [ detailId, setDetailId ] = useState<string>();


    const closeModal = () => {
        setOpenModal(false)
    }

    const handleOpenModal = (id: string) => {
        setDetailId(id)
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
                Identificador:  sale.id,
                Productos: sale.salesDetails.reduce((acc, detail) => acc + detail.quantity, 0)
                // Producto: sale.salesDetails.map((detail)=> detail.product.name).join(", ")
            }))
            setHistory(formatedSales)
        } catch (error) {
            console.log(error)
        }
    }

    const colums: Array<keyof Sales > = ['Fecha', 'Total', 'Pago', 'Productos']

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
                        onClick={() => handleOpenModal(sale.id)}
                        name="Ver"
                    />
                </div>
            )}
        />
        <ModalUi 
            isOpen={openModel}
            onRequestClose={closeModal}
            style={Styles}
        >
            <ListShop 
                detailId={detailId}
            />
        </ModalUi>
    </>
  )
}
