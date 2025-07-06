import { createClient } from "redis"


export function initRedis() {
  return createClient({
    username: 'default',
    password: process.env.REDIS_PASSWORD!,
    socket: {
      host: process.env.REDIS_HOST!,
      port: Number(process.env.REDIS_PORT!)
    }
  });
}
