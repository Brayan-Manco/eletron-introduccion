import { Table } from "../../../components/Table/Table";
import { handleError } from "../../../../backend/utils";
import { Button } from "../../../components/Button/Button";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";
import { formatDate } from "../../../utils/dateUtils";

type User = {
  createdAt: string, 
  email: string, 
  id: string,
  updatedAt: string
}

export const UserList = () => {


  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const deleteUser = async(id: string)=> {
    try {
      
      await window.api.deleteUser(id)
      setUsers(users.filter(user => user.id !== id))
      alert('Usuario elimando correctamente')
      
    } catch (error) {
      alert('Error al eliminar al Usuario')
      handleError(error)
    }
  }

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const userData= await window.api.getUsers();

      const formattedUser = userData.map((user: User)=>({
        email:  user.email,
        id: user.id,
        createdAt: formatDate(user.createdAt),
        updatedAt: formatDate(user.updatedAt),
      }))
      setUsers(formattedUser);
    } catch (err) {
      const handledError = handleError(err);
      setError(handledError.message);
    } finally {
      setLoading(false);
    }
  };

  const colums: Array<keyof User> = ["createdAt", "email", "updatedAt"];


  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Table 
        columns={colums}
        data={users}
        renderActions={(users)=> (
          <>
            <Button variant="red" name="Eliminar" onClick={() => deleteUser(users.id)}/> 
            <Button name="Actualizar" /> 
          </>
        )}
      />
    </div>
  );
};
