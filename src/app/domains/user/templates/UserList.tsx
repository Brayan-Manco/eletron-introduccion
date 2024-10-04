import { handleError } from "../../../../backend/utils";
import { Button } from "../../../components/Button";
import { User } from "@prisma/client";
import { useEffect, useState } from "react";

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
      const user = await window.api.getUsers();
      setUsers(user);
    } catch (err) {
      const handledError = handleError(err);
      setError(handledError.message);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <table style={{ width: '100%'}}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={2}>No se encontraron usuarios</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button variant="red" name="Eliminar" onClick={() => deleteUser(user.id)}/> 
                  <Button name="Actualizar" /> 
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
