import { NextFunction, Request, Response } from 'express';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'InvalidData':
      res.status(401).json({ message });
      break;
    case 'Unprocessable':
      res.status(422).json({ message });
      break;
    default:
      res.status(500).json({ message });
  }

  next();
};

export default errorHandler;