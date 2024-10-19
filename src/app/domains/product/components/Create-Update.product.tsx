import { Select } from "../../../components/Select/Select";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components/Input";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { formatSelectOptions } from "../../../utils/formatSelectOptions";

interface formProps {
  productId?: string;
  onSuccess: () => void;  
}

const initialValues = {
  name : "",
  price: "",
  description: "",
  image: "",
  stock: "",
  categoryId: "",
}

const handleFormSubmit = async( values: typeof initialValues, productId: string | null,  onSuccess?: ()=> void) => {

  console.log(values)
  try {
    if(productId){
      await window.api.updateProduct(productId, values)
      alert('Producto actualizado con exito')
    }else {
      await window.api.createProduct(values);
      alert('Producto creado con exito')
    }
    if (onSuccess) {
      onSuccess(); 
    }
  } catch (err){
    alert('Ucurrio un error al crear el producto')
  }
}

export const CreateUpdateproduct = ({
  productId,
  onSuccess
}:  formProps) => {

  const [ categories, setIsCategories ] = useState([])

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => handleFormSubmit( values, productId, onSuccess),
  })

  const getCategory = async() => {
    try {
      const data = await window.api.getCategories();
      const formattedData = formatSelectOptions(data, 'name', 'id')
      setIsCategories(formattedData);
      return data
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    const  fetchProduct = async() => {
      if(productId){
        try {
          const { categoryId, description, image, name,  price, stock } = await window.api.getProduct(productId);

          formik.setValues({
            categoryId: categoryId,
            description: description,
            image: image,
            name: name,
            price: price,
            stock: stock
          });
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchProduct();

    getCategory()
  },[])

  return (
  <div>
    <form onSubmit={formik.handleSubmit}>
      <h1>{productId ? 'Editar Producto'  : 'Crear Producto'}</h1>
      <div>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <Input
          id="price"
          name="price"
          type="number"
          placeholder="Precio"
          value={formik.values.price}
          onChange={formik.handleChange}
        />
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Descripción"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        <Input
          id="image"
          name="image"
          type="text"
          placeholder="URL imagen"
          value={formik.values.image}
          onChange={formik.handleChange}
        />
        <Input
          id="stock"
          name="stock"
          type="number"
          placeholder="Stock"
          value={formik.values.stock}
          onChange={formik.handleChange}
        />
        <Select
          id="categoryId"
          name="categoryId"
          options={categories}
          value={formik.values.categoryId}
          onChange={formik.handleChange}
          label="Opciones Disponibles"
          placeholder="Seleccione una opción"
        />
      </div>
        <Button type="submit" name={productId ? 'Actualizar' : 'Crear'}/>
    </form>
  </div>
  )
}
