import app from './app';
import sequelize from './db/config/connection';
import configs from './config/environment';

const {
  app: { port },
} = configs;

sequelize
  .authenticate()
  .then(() => {
    console.log('it work');
  })
  .catch(error => {
    console.log(error);
  });
const PORT = port || 8080;

app.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
