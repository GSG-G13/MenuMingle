import { Server as HttpServer } from 'http';

import { Server, Socket } from 'socket.io';

const startSocket = (server: HttpServer) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173',
      methods: '*',
    },
  });

  io.on('connection', socket => {
    console.log(`User connected ${socket.id}`);

    socket.on('disconnect', () => {
      console.log(`User disconnected ${socket.id}`);
    });
  });

  return io;
};

export default startSocket;
