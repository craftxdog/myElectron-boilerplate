import type { Channels } from "../preload/ipc";

export {};

declare global {
  interface Window {
    api: {
      send: (channel: Channels, ...args: unknown[]) => void;
      on: (channel: Channels, callback: (...args: unknown[]) => void) => void;
    };
  }
}
