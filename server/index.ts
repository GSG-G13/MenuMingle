import app from './app';

const PORT = 3000;

app.listen(PORT, (): void => {
  console.log(`server is running on http://localhost:${PORT}`);
});
