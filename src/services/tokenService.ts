import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces';

dotenv.config();

export default class TokenService {  
  public secret: string;

  constructor() {
    this.secret = process.env.MY_SECRET || 'password';
  }

  public createToken = (user: IUser): string => {
    const { secret } = this;
    
    const jwtConfig: SignOptions = {
      expiresIn: '15m',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    return token;
  };

  public validateToken = (token: string): IUser | undefined => {
    try {
      const { secret } = this;
  
      if (!token) throw new Error('Token not found');
         
      const { data: user }: any = jwt.verify(token, secret);
  
      return user;      
    } catch (error: any) {
      error.name = 'InvalidData';
      if (error.message.includes('jwt malformed')) {
        error.message = 'Invalid token';
      }
      throw error;
    }
  };
}