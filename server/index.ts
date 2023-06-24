import app from './app';
import configs from './config/environment';
import { Server } from 'socket.io';
import cors from 'cors';
import { createServer } from 'http';

const {
  app: { port },
} = configs;

const PORT = port || 8080;
app.use(cors());
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
    methods: '*',
  },
});
io.on('connection', socket => {
  console.log(`User connected ${socket.id}`);

  socket.on('send_message', data => {
    console.log(data);
  });
});
httpServer.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
