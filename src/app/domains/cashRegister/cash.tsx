import { useEffect, useState } from "react";
import { Catalogue } from "./components/Catalogue";
import { ShoppingCart } from "./components/ShoppingCart"
import { ModalUi } from "../../components/Modal/Modal";
import { ConfirShop } from "./components/ConfirShop";
import { Producto } from "./components/interface/product.interface";


export const CashPage = () => {
    
  const [listShop, setListShop] = useState<Producto[]>([]);
  const [OpenModal, setOpenModal] = useState(false);
  const [productos , setProduct] = useState<Producto[]>([]);

  const total = listShop.reduce((sum, producto) => sum + producto.price * producto.quantity, 0);

  function closeModal() {
    setOpenModal(false);
  }

  const getProduct = async() =>{
    try {
      const data = await window.api.getProducts();
      const formatedData = data.map((product: any) =>({
        id: product.id,
        name: product.name,
        price: product.price,
        img: product.img,
        stock: product.stock
      }))
      setProduct(formatedData);
    } catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div style={{
        display: "flex",
        gap: '30px',
        padding: '30px',
        maxWidth: '1200px',
        margin: '0  auto',
        borderRadius: '12px'
    }}>
      <Catalogue
        products={productos}
        listShop={listShop}
        setListShop={setListShop}
      />
      <ShoppingCart
        setListShop={setListShop}
        listShop={listShop}
        total={total}
        setOpen={setOpenModal}
      />

      <ModalUi
        onRequestClose={closeModal}
        isOpen={OpenModal}
      >
        <ConfirShop 
          listShop={listShop}
          Open={OpenModal}
          setOpen={setOpenModal}
          setListShop={setListShop}
        />
      </ModalUi>
    </div>
  );
};
