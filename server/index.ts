import app from './app';
import configs from './config/environment';

const {
  app: { port },
} = configs;

const PORT = port || 8080;

app.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
