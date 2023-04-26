import express from 'express';
import { functionToTest } from './functionToTest';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Litening on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  const result = functionToTest();
  res.send(`Result = ${result}`);
});
