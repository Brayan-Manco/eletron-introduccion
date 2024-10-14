import { useEffect, useState } from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { useFormik } from 'formik';

interface  formProps {
    categoryId?: string;
    onSuccess: () => void;
}


const initialValues = {
    name: ""
}


const handleFormSubmit = async (
    values: typeof initialValues, categoryId?: string, onSuccess?: () => void
) => {
    try {

        let data;

        if(categoryId) {
            data = await window.api.updateCate( categoryId, values)
            alert("Datos actualizados");
        }else {
            data = await window.api.createCategory(values);
            alert("Categoria creada");

        }
        if (onSuccess) {
            onSuccess(); 
        }
    }catch  (error) {  
        console.log(error)
    }

  };

export const CreateUpdateCategory = ({ 
    categoryId,
    onSuccess 
}: formProps) => {
    


    const formik = useFormik({
        initialValues,
        onSubmit: (values) => handleFormSubmit( values, categoryId, onSuccess)
    })

    useEffect(() => {
        const fetchCategories = async () => {
            if(categoryId){
                try {
                    const { name } = await window.api.getCategory(categoryId);
                    formik.setValues({ name: name });
                } catch (error) {
                  console.log("Error al obtener la categoría:", error);
                }
            }
        };
        fetchCategories();
    }, [categoryId])
    

  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h1>{categoryId ?  "Editar categoria" : "Crear categoria"}</h1>
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
            <Button  type='submit' name={categoryId ?  'Actualizar' : 'Crear'} />
        </form>
    </div>
  )
}
