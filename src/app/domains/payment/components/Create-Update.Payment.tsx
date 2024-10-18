import { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useFormik } from 'formik';

interface  formProps {
    paymentId?: string;
    onSuccess: () => void;
}

const initialValues = {
    name: ""
}

const handleFormSubmit = async (
    values: typeof initialValues, paymentId?: string, onSuccess?: () => void
) => {
    try {
        let data;

        if(paymentId) {
            data = await window.api.updatePayment( paymentId, values)
            alert("Datos actualizados");
        }else {
            data = await window.api.createPayment(values);
            alert("Categoria creada");
        }
        if (onSuccess) {
            onSuccess(); 
        }
    }catch  (error) {  
        console.log(error)
    }
  };

export const CreateUpdatePayment = ({
    paymentId,
    onSuccess
}:  formProps) => {

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => handleFormSubmit( values, paymentId, onSuccess)
    })

    useEffect(() => {
        const fetchPayment = async () => {
            if(paymentId){
                try {
                    const { name } = await window.api.getPayment(paymentId);
                    formik.setValues({ name: name });
                } catch (error) {
                  console.log("Error al obtener la forma de pago:", error);
                }
            }
        };
        fetchPayment();
    }, [paymentId])
    

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h1>{paymentId ?  "Editar Metodo de pago" : "Crear Metodo de pago"}</h1>
            <div>
                <Input 
                    id='name'
                    name='name'
                    type='text'
                    placeholder='Nombre'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </div>
            <Button  type='submit' name={paymentId ?  'Actualizar' : 'Crear'} />
        </form>
    </div>
  )
}
