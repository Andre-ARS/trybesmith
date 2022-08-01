import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { AuthService } from '../services';

export default class AuthController {
  constructor(private authService = new AuthService()) { }

  public login = async (req: Request, res: Response) => {
    const { authService } = this;
    
    const user = req.body;
    
    const token = await authService.login(user);

    res.status(StatusCodes.OK).json({ token });
  };
}
