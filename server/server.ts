import app from './app';
const PORT = 3000;
const x: number = 5;


function processValue(value: number) {
  // Code logic using the value
  console.log(value);
}
processValue(5);
console.log(x);

app.listen(PORT, () => {
  console.log(`the server is running on http://localhost:${PORT}`);
});
