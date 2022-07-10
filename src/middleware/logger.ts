import express from 'express';

const logger = (req : express.Request, res: express.Response, next: express.NextFunction): void => {
    console.log(`${new Date()} : Url called - '${req.url}'`);

    next();
};

export default logger;
