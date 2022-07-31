import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { OrderService } from '../services';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public findAll = async (req: Request, res: Response) => {
    const { orderService } = this;
        
    const orders = await orderService.findAll();

    res.status(StatusCodes.OK).json(orders);
  };
}
