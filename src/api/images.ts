import fs from 'fs';
import { getImageFullPath, thumbnails, fullpath } from '../shared/common';

const isImageExists = (filename: string, width: string, height: string): [boolean, boolean, string] => {
    const imageDirectoryThumbnail = getImageFullPath(thumbnails, filename + width + height);
    const imageDirectoryFull = getImageFullPath(fullpath, filename);

    try {
        if (fs.existsSync(imageDirectoryThumbnail)) {
            console.log(`Cache image exists for image ${filename}`);
            
            return [true, true, imageDirectoryThumbnail];
        } else if (fs.existsSync(imageDirectoryFull)) {
            console.log('Cached image does not exists for image ${filename}. Converting image from original');

            return [true, false, imageDirectoryFull];
        }

        console.log(`Image does not exists with ${filename}`);
        return [false, false, ''];
    } catch(err) {
        console.error(err)
    }

    return [false, false, ''];
}


export default isImageExists;