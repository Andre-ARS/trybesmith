import { IProduct } from '../interfaces';
import { connection, ProductModel } from '../models';
import { productsValidation } from '../validations';

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

    productsValidation(product);

    const result = await model.create(product);

    return result;
  }; 
}