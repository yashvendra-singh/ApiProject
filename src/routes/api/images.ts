import express from 'express';
import fs from 'fs';
import { getDirectoryPath } from '../../utilities/utility';

const routesImages = express.Router();

routesImages.get('/', (req: express.Request, res: express.Response): void => {
  try {
    fs.readdir(getDirectoryPath('full'), function (err, files) {
      // handling error
      if (err) {
        return console.log('Unable to scan directory: ' + err);
      }

      let allfiles = '<r>';
      let count = 1;

      files.forEach(function (file) {
        allfiles += count + '- ' + file + '<br>';
        count++;
      });

      res.send(`<h3>Images available are -</h3>
            ${allfiles}`);
    });
  } catch (error) {
    console.log('Error occured ' + error);
  }
});

routesImages.all('/*', (req: express.Request, res: express.Response): void => {
  res.status(404).send(`<h1>Invalid path</h1>`);
});

export default routesImages;
