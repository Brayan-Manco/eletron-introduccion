import { useState } from "react";
import { UserCreate } from "./templates/UserCreate";
import { UserList } from "./templates/UserList";
import { Button } from "../../components/Button";

export const UserPage = () => {
  const [ active, setActive ] = useState(true);

  const handleButton = () => {
    setActive(a => !a)
  }

  return (
    <div>
      <h1>User</h1>
      <div>
        <Button
          name={active ? "Crear Usuario" : "Usuarios"}
          variant="blue"
          type="button"
          onClick={handleButton}
        />
        <div>
          { active ? <UserList/> : <UserCreate/>}
        </div>
      </div>
    </div>
  );
};
