import { createServer } from 'http';

import configs from './config/environment';
import app from './app';
import startSocket from './ws';

const {
  app: { port },
} = configs;

const PORT = port || 8080;

export const httpServer = createServer(app);

export const io = startSocket(httpServer);

httpServer.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
