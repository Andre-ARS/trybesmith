import { NextFunction, Response } from 'express';
import { TokenService } from '../services';

const tokenService = new TokenService();

const tokenValidation = (req: any, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  const user = tokenService.validateToken(authorization);

  req.user = user;
  next();
};

export default tokenValidation;