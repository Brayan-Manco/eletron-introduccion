import { useState } from "react";
import { Catalogue } from "./components/Catalogue";
import { ShoppingCart } from "./components/ShoppingCart"
import { Button } from "../../components/Button";
import { ModalUi } from "../../components/Modal/Modal";
import { ConfirShop } from "./components/ConfirShop";

interface Producto {
  id: number;
  name: string;
  price: number;
  img: string;
  stock: number;
}

const productos: Producto[] = [
  { id: 1, name: "Camiseta", price: 15.99, img: "/placeholder.svg?height=50&width=50",  stock: 10 },
  { id: 2, name: "Pantalón", price: 29.99, img: "/placeholder.svg?height=50&width=50", stock: 5 },
  { id: 3, name: "Zapatos", price: 49.99, img: "/placeholder.svg?height=50&width=50", stock: 15 },
  { id: 4, name: "Gorra", price: 9.99, img: "/placeholder.svg?height=50&width=50" , stock: 20 },
  { id: 5, name: "Calcetines", price: 4.99, img: "/placeholder.svg?height=50&width=50", stock: 30 },
];

export const CashPage = () => {
  const [search, setSearch] = useState("");
  const [listShop, setListShop] = useState<Producto[]>([]);
  const [OpenModal, setOpenModal] = useState(false);

  const productosFiltrados = productos.filter(producto =>
    producto.name.toLowerCase().includes(search.toLowerCase())
  );

  const agregarProducto = (producto: Producto) => {
    setListShop([...listShop, producto]);
  };

  const eliminarProducto = (index: number) => {
    const nuevaLista = listShop.filter((_, i) => i !== index);
    setListShop(nuevaLista);
  };

  const total = listShop.reduce((sum, producto) => sum + producto.price, 0);

  const finalizarCompra = () => {
    setOpenModal(true);
  };

  const cerrarModal = () => {
    setOpenModal(false);
    setListShop([]);
  };

  function closeModal() {
    setOpenModal(false);
  }

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
        search={search}
        setSearch={setSearch}
        productsFilter={productosFiltrados}
        addProduct={agregarProducto}
      />
      <ShoppingCart
        listShop={listShop}
        deleteProduct={eliminarProducto}
        total={total}
        finishShop={finalizarCompra}
      />

      <ModalUi
        onRequestClose={closeModal}
        isOpen={OpenModal}
      >
        <ConfirShop 
          listShop={listShop}
        />
      </ModalUi>
    </div>
  );
};
