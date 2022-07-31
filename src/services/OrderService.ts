import { IOrder } from '../interfaces';
import { connection, OrderModel } from '../models';

export default class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }

  public findAll = async (): Promise<IOrder[]> => {
    const { model } = this;

    const orders = await model.findAll();

    return orders;
  };
}