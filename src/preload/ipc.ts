export const channels = {
  ping: "ping",
} as const;

export type Channels = (typeof channels)[keyof typeof channels];
