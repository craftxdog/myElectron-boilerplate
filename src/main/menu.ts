import { Menu, BrowserWindow, shell } from "electron";

export function buildMenu(mainWindow: BrowserWindow) {
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "Close",
          accelerator: "CmdOrCtrl+W",
          click: () => mainWindow.close(),
        },
      ],
    },
    {
      label: "View",
      submenu: [
        {
          label: "Toggle DevTools",
          accelerator: "Alt+CmdOrCtrl+I",
          click: () => mainWindow.webContents.toggleDevTools(),
        },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Electron Docs",
          click: () => shell.openExternal("https://electronjs.org"),
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
