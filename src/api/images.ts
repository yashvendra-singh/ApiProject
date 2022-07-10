import fs from 'fs';
import path from 'path';
import { getImageFullPath } from '../shared/common';
import dirname from 'path';

import sharp from 'sharp';

const isImageExists = (filename: string, width: string, height: string): boolean => {
    const imageDirectoryThumbnail = getImageFullPath('thumbnails', filename + width + height);
    const imageDirectoryFull = getImageFullPath('full', filename);
    console.log('current dir name ' + imageDirectoryThumbnail);
    console.log('current dir name ' + imageDirectoryFull);
    try {
        if (fs.existsSync(imageDirectoryThumbnail)) {
            console.log('Cache image exists');
            
            return true;
        } else if (fs.existsSync(imageDirectoryFull)) {
            console.log('Cached image does not exists. Converting image from original');

            return true;
        }

        console.log('File does not exists');
        return false;
    } catch(err) {
        console.error(err)
    }
    
    return true;

}


export default isImageExists;