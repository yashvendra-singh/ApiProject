import { Request } from 'express';
import path from 'path';

const thumbnails = 'thumbnails';
const fullpath = 'full';

const isValidImageUrl = (request: Request): [boolean, string] => {
  const filename: string = request.query.filename as unknown as string;
  const width: string = request.query.width as unknown as string;
  const height: string = request.query.height as unknown as string;

  switch (filename) {
    case undefined:
      return [false, 'filename is not found in query string'];
    case '':
      return [false, 'filename is empty in query string'];
    default:
      break;
  }

  switch (width) {
    case undefined:
      return [false, 'width is not found in query string'];
    default:
      break;
  }

  switch (height) {
    case undefined:
      return [false, 'height is not found in query string'];
    default:
      break;
  }

  const inputWidth = parseInt(width);
  const inputHeight = parseInt(height);

  if (isNaN(inputWidth)) {
    return [false, 'width is not a valid number'];
  } else if (inputWidth < 0) {
    return [false, 'width can not be a negative number'];
  }

  if (isNaN(inputHeight)) {
    return [false, 'height is not a valid number'];
  } else if (inputHeight < 0) {
    return [false, 'height can not be a negative number'];
  }

  return [true, ''];
};

const getImageDetails = (request: Request): [string, string, string] => {
  const filename: string = request.query.filename as unknown as string;
  const width: string = request.query.width as unknown as string;
  const height: string = request.query.height as unknown as string;

  return [filename, width, height];
};

const getImageFullPath = (type: string, filename: string): string => {
  return path.join(getDirectoryPath(type), filename + '.jpg');
};

const getDirectoryPath = (type: string): string => {
  return path.join(
    __dirname.substring(0, __dirname.length - 9),
    'images',
    type
  );
};

export {
  isValidImageUrl,
  getImageDetails,
  getImageFullPath,
  getDirectoryPath,
  thumbnails,
  fullpath,
};
