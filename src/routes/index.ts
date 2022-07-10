import express from 'express';
import logger from '../middleware/logger';
import routesImages from './api/images';

const routes = express.Router();

routes.get('/', logger, (req, res) => {
    res.send('Welcome to Image Processing Api');
});

routes.use('/api/image', logger, routesImages);
routes.all('/*', (req: express.Request, res: express.Response) : void => {
    res.status(404).send(`<h1>Invalid path</h1>`);
});

export default routes;