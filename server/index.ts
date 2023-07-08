import app from './app';
import configs from './config/environment';
import cors from 'cors';

const {
  app: { port },
} = configs;

const PORT = port || 8080;
app.use(cors());

app.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
