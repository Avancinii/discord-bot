import express from 'express';
import { router } from './routes';
import { env } from 'process';

const PORT = env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(router);

app.listen( PORT, () => {
  console.log(`Server running on port ${PORT}`);
});