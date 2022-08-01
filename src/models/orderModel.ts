import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrder } from '../interfaces';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findAll = async (): Promise<IOrder[]> => {
    const { connection } = this;

    const query = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p
      ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY o.userId;`;
    
    const [orders] = await connection.execute(query);

    return orders as IOrder[];
  };

  public create = async (userId: number) => {
    const { connection } = this; 

    const query = `INSERT INTO Trybesmith.Orders (userId)
    VALUES (?);`;

    const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [userId]);

    return insertId;
  };
}