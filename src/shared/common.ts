import { Request } from "express";
import path from "path";

const isValidImageUrl = (request : Request) : boolean => {

    const filename : unknown = request.query.filename;
        const width : string = (request.query.width as unknown) as string;
        const height : string = (request.query.height as unknown) as string;

        if(filename === undefined || width === undefined || height === undefined 
            || filename == '' || isNaN(parseInt(width)) || isNaN(parseInt(height))) {
            
            return false;
        } else {
            return true;
        }
}

const getImageDetails = (request : Request) : [string, string, string] => {

        const filename : string = (request.query.filename as unknown) as string;
        const width : string = (request.query.width as unknown) as string;
        const height : string = (request.query.height as unknown) as string;

        return [filename, width, height];
}

const getImageFullPath = (type: string, filename: string) : string => {
    return path.join(__dirname.substring(0, __dirname.length - 6), 'images', type, filename + '.jpg');
};

export {isValidImageUrl, getImageDetails, getImageFullPath};