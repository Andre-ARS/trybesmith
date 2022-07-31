import IProduct from '../interfaces';
import { connection, ProductModel } from '../models';

export default class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }

  public findAll = async (): Promise<IProduct[]> => {
    const { model } = this;

    const result = await model.findAll();

    return result;
  };

  public create = async (product: IProduct): Promise<IProduct> => {
    const { model } = this;

    const result = await model.create(product);

    return result;
  }; 
}