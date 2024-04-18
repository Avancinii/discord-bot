import express from 'express';
import { router } from './routes';
import { env } from 'process';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from './swagger.json'; 

const PORT = env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup());

app.listen( PORT, () => {
  console.log(`Server running on port ${PORT}`);
});