import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findUser = async (userInfo: ILogin): Promise<IUser[]> => {
    const { connection } = this;
    const values = [userInfo.username, userInfo.password];

    const query = `SELECT * FROM Trybesmith.Users
      WHERE username = ?
      AND password = ?;`;

    const [user] = await connection.execute(query, values);

    return user as IUser[];
  };

  public create = async (user: IUser): Promise<IUser> => {
    const { connection } = this;
    const { username, classe, level, password } = user;

    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?);`;
    
    const [{ insertId: id }] = await connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);

    return { id, ...user };
  };
}