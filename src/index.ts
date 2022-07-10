import express from 'express';
import logger from './middleware/logger';

const app = express();
const port: number = 3000;

app.get('/', logger, (req, res) => {
    res.send('Welcome to Image Processing Api');
});

app.listen(port, (): void => {
    console.log(`Server started on http://localhost:${port}`);
});