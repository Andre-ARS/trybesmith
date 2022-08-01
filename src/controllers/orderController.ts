import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { OrderService } from '../services';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public findAll = async (_req: Request, res: Response) => {
    const { orderService } = this;
        
    const orders = await orderService.findAll();

    res.status(StatusCodes.OK).json(orders);
  };

  public create = async (req: any, res: Response) => {
    const { orderService } = this;
    const { body: { productsIds }, user: { id } } = req;

    const newOrder = await orderService.create(productsIds, id);

    res.status(StatusCodes.CREATED).json(newOrder);
  };
}
