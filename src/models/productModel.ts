import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: IProduct): Promise<IProduct> => {
    const { connection } = this;
    const { name, amount } = product;

    const query = `INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?);`;
    
    const [{ insertId: id }] = await connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id, ...product };
  };
}