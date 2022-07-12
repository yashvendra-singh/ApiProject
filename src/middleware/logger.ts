import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
): void => {
  console.log(
    `${new Date()} : IP ${req.ip} : Url called - '${req.originalUrl}'`
  );
  next();
};

export default logger;
