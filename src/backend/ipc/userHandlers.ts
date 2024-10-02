import { ipcMain } from 'electron';
import { createUser, getUser, getUsers } from '../controllers/userController';

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

}