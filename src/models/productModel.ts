import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findAll = async (): Promise<IProduct[]> => {
    const { connection } = this;

    const query = 'SELECT * FROM Trybesmith.Products;';

    const [products] = await connection.execute(query);

    return products as IProduct[];
  };

  public create = async (product: IProduct): Promise<IProduct> => {
    const { connection } = this;
    const { name, amount } = product;

    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?);`;
    
    const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id, ...product };
  };
}