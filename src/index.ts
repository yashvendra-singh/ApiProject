import express from 'express';
import routes from './routes/index';

const app = express();
const port: number = 3000;

app.use('/', routes);

app.listen(port, (): void => {
    console.log(`Server started on http://localhost:${port}`);
});