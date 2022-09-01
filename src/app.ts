import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swaggerFile';
import router from './routes';

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);

export default app;
