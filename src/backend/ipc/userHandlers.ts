import { ipcMain } from 'electron';
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/user/UserController';

export function setupUserHandlers() {
  ipcMain.handle('createUser', async (event, { email, name, password }) => {
    return await createUser(email, name, password);
  });

  ipcMain.handle('getUsers', async () => {
    return await getUsers();
  });

  ipcMain.handle('getUser', async (event, id) => {
    return await getUser(id);
  });

  ipcMain.handle('deleteUser', async(event, id) => {
    return await deleteUser(id);
  })

  ipcMain.handle('updateUser', async(event, id, data) => {
    return await updateUser(id, data)
  })

}