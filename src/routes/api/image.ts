import express from 'express';
import {
  isValidImageUrl,
  getImageDetails,
  getImageFullPath,
  thumbnails,
} from '../../utilities/utility';
import isImageExists from '../../api/images';
import compressImage from '../../modules/compressimage';

const routesImage = express.Router();

routesImage.get(
  '/',
  async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const isImageValid = isValidImageUrl(req);
      if (isImageValid[0]) {
        const image = getImageDetails(req);

        const isValidImage = isImageExists(image[0], image[1], image[2]);

        if (isValidImage[0]) {
          const destImagePath = getImageFullPath(
            thumbnails,
            image[0] + image[1] + image[2]
          );

          if (!isValidImage[1]) {
            console.log(`Converting and saving image to path 
              ${destImagePath}`);

            await compressImage(
              isValidImage[2],
              parseInt(image[1]),
              parseInt(image[2]),
              destImagePath
            );
          }

          res.sendFile(destImagePath);
        } else {
          res.status(400).send(`<h2>Could not find image. 
                Please go to below path to get an image.</h2>
          
                  Example: http:///localhost:3000/api/images`);
        }
      } else {
        res.status(400).send(`<h2>Please provide image name in 
              url followed by dimensions.</h2>
          
              Example: http:///localhost:3000/image?filename=palmtunnel&width=200&height=200
              
              <br><br><h4>Error - ${isImageValid[1]}</h4>`);
      }
    } catch (error) {
      console.log('Error occured ' + error);

      res.status(500).send(`Unknown error occured while processing request.
               Please contact admin.`);
    }
  }
);

routesImage.all('/*', (req: express.Request, res: express.Response): void => {
  res.status(404).send(`<h1>Invalid path</h1>
    <h2>Please provide image name in url followed by dimensions.</h2>
        
    Example: http:///localhost:3000/image?filename=palmtunnel&width=200&height=200`);
});

export default routesImage;
