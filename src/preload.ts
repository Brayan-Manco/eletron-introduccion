// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { User } from '@prisma/client';
import { contextBridge, ipcRenderer } from 'electron';
import { userUpdate } from './backend/interfaces/user.interface';


contextBridge.exposeInMainWorld('api', {
    // USER
    createUser: (user: User) => ipcRenderer.invoke('createUser', user),
    getUsers: () => ipcRenderer.invoke('getUsers'),
    getUser: (id: string) => ipcRenderer.invoke('getUser', id),
    deleteUser: ( id: string) => ipcRenderer.invoke('deleteUser', id),
    updateUser: (id: string, data: userUpdate) => ipcRenderer.invoke('updateUser', id, data)
});


