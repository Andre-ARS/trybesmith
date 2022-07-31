import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ProductService } from '../services';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public findAll = async (_req: Request, res: Response) => {
    const { productService } = this;

    const products = await productService.findAll();

    res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { productService } = this;
    
    const product = req.body;
    
    const newProduct = await productService.create(product);

    res.status(StatusCodes.CREATED).json(newProduct);
  };
}