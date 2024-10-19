import { useState } from "react";
import { UserCreate } from "./components/UserCreate";
import { UserList } from "./components/UserList";
import { Button } from "../../components/Button/Button";
import { ModalUi } from "../../components/Modal/Modal";



export const Styles  = {
  width: '600px',
  height: '400px', 
  backgroundColor: "#10375C",
  top: "100px",
  left: "30%",
  right: "50%",
  bottom: "10px",
  marginRight: "0",
  transform: "",
};

export const UserPage = () => {
  const [ createIsOpen, setCreateIsOpen ] = useState(false);

  function closeModal() {
    setCreateIsOpen(false);
  }

  const handleButton = () => {
    setCreateIsOpen(true);
  }

  return (
    <div>
      <h1>User</h1>
      <div>
        <Button
          name={"Usuarios"}
          variant="blue"
          type="button"
          onClick={handleButton}
        />
        <div>
          <UserList/> 
          <ModalUi
            isOpen={createIsOpen}
            onRequestClose={closeModal}
          >
            <UserCreate/>
          </ModalUi>
        </div>
      </div>
    </div>
  );
};
