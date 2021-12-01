import Hapi from '@hapi/hapi';
import { PORT } from './config';

export const createServer = async () => {
  const server = Hapi.server({
    port: PORT,
  });

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (_request, _h) => {
        return {
          message: 'Hello Hapi!',
        };
      },
    },
  ]);

  return server;
};

export const initServer = async () => {
  const server = await createServer();
  await server.initialize();
  return server;
};

export const startServer = async () => {
  const server = await createServer();
  await server.start();
  return server;
};
