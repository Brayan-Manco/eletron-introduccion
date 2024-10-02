import { app, BrowserWindow, screen, session, ipcMain } from 'electron';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { createUser, getUsers } from './backend/controllers/userController';
import { setupIpcHandlers } from './backend/ipc';
import { get } from 'http';

const prisma = new PrismaClient();


if (require('electron-squirrel-startup')) {
  app.quit();
}

app.disableHardwareAcceleration();

const createWindow = () => {

  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    // esconde la barra de menu predefinida de electron
    // autoHideMenuBar: true,
  });

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => { 
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: http: https:; font-src 'self' data:; connect-src 'self' ws: wss:; frame-src 'self' *;"
        ]
      },
    });
  });

  // and load the index.html of the app.
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

app.whenReady().then(async () => {
  createWindow();
  setupIpcHandlers();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.disableHardwareAcceleration();