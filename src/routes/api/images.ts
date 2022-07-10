import express from 'express';
import {isValidImageUrl, getImageDetails} from '../../shared/common';
import isImageExists from '../../api/images';

const routesImages = express.Router();

routesImages.get('/', (req: express.Request, res: express.Response): void => {
    try {
        if(isValidImageUrl(req)) {
            const image = getImageDetails(req);

            if(isImageExists(image[0], image[1], image[2])) {

            } else {

            }

            res.send(`Image will be displayed`);
        } else {
            res.status(500).send(`<h2>Please provide image name in url followed by dimensions.</h2>
        
            Example: http:///localhost:3000/image?filename=palmtunnel&width=200&height=200`);
        }
    } catch (error) {
        console.log("Error occured " + error);
    }
});

routesImages.all('/*', (req: express.Request, res: express.Response) : void => {
    res.status(404).send(`<h1>Invalid path</h1>`);
});

export default routesImages;