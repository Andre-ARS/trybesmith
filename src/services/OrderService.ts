import { IOrder } from '../interfaces';
import { connection, OrderModel, ProductModel } from '../models';
import { ordersValidation } from '../validations';

export default class OrderService {
  public orderModel: OrderModel;

  public productModel: ProductModel;
  
  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public findAll = async (): Promise<IOrder[]> => {
    const { orderModel } = this;

    const orders = await orderModel.findAll();

    return orders;
  };

  public create = async (productsIds: number[], userId: number) => {
    const { orderModel, productModel } = this;
    ordersValidation({ productsIds });

    const orderId = await orderModel.create(userId);

    await productsIds.forEach(async (product: number) => {
      await productModel.update(orderId, product);
    });

    return { userId, productsIds };
  };
}