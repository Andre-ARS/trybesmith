import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserService } from '../services';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const { userService } = this;
    
    const user = req.body;
    
    const token = await userService.create(user);

    res.status(StatusCodes.CREATED).json({ token });
  };
}
