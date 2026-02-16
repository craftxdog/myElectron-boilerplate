import { contextBridge, ipcRenderer } from "electron";
import type { Channels } from "./ipc.js";

const api = {
  send(channel: Channels, ...args: unknown[]) {
    ipcRenderer.send(channel, ...args);
  },
  on(channel: Channels, callback: (...args: unknown[]) => void) {
    ipcRenderer.on(channel, (_event, ...args) => callback(...args));
  },
};

contextBridge.exposeInMainWorld("api", api);
