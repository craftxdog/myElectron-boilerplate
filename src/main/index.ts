import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { app, BrowserWindow } from "electron";
import { buildMenu } from "./menu.js";

import { ipcMain } from "electron";

ipcMain.on("ping", (event, message) => {
  console.log("Renderer dice:", message);
  event.reply("ping", "pong desde main");
});

let mainWindow: BrowserWindow | null = null;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "../preload/index.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  if (!app.isPackaged) {
    await mainWindow.loadURL("http://localhost:5173");
    mainWindow.webContents.openDevTools();
  } else {
    await mainWindow.loadFile(
      new URL("../renderer/index.html", import.meta.url).pathname,
    );
  }

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  buildMenu(mainWindow);
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
