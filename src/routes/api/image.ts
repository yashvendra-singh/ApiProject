import express from 'express';
import {isValidImageUrl, getImageDetails, getImageFullPath, thumbnails} from '../../shared/common';
import isImageExists from '../../api/images';
import sharp from 'sharp';

const routesImage = express.Router();

routesImage.get('/', async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        if(isValidImageUrl(req)) {
            const image = getImageDetails(req);

            const isValidImage = isImageExists(image[0], image[1], image[2]);

            if(isValidImage[0]) {                
                const imagePath = getImageFullPath(thumbnails, image[0]+image[1]+image[2]);

                if(!isValidImage[1]) {                                       
                    console.log(`Converting and saving image to path ${imagePath}`)
                    
                    //convert the image using sharp                                
                    await sharp(isValidImage[2])
                    .resize({
                        width: parseInt(image[1]),
                        height: parseInt(image[2])
                      })
                    .toFormat("jpeg", { mozjpeg: true })
                    .toFile(imagePath);
                } 

                res.sendFile(imagePath);                
            } else {
                res.status(201).send(`<h2>Could not find image. Please go to below path to get an image.</h2>
        
                Example: http:///localhost:3000/api/images`);
            }
        } else {
            res.status(201).send(`<h2>Please provide image name in url followed by dimensions.</h2>
        
            Example: http:///localhost:3000/image?filename=palmtunnel&width=200&height=200`);
        }
    } catch (error) {
        console.log("Error occured " + error);
    }
});

routesImage.all('/*', (req: express.Request, res: express.Response) : void => {
    res.status(404).send(`<h1>Invalid path</h1>
    <h2>Please provide image name in url followed by dimensions.</h2>
        
    Example: http:///localhost:3000/image?filename=palmtunnel&width=200&height=200`);
});

export default routesImage;