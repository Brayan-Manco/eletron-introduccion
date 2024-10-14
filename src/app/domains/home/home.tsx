import React, { useState } from "react";
import { ModalUi } from "../../components/Modal/Modal";
import { Button } from "../../components/Button";

export const HomePage = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <h1>Home</h1>
      <Button onClick={openModal} name="Abrir modal"/>
      <ModalUi
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1>Modal</h1>
      </ModalUi>
    </div>
  )
}

