import { IUser } from '../interfaces';
import { connection, UserModel } from '../models';
import { usersValidation } from '../validations';
import TokenService from './tokenService';

export default class UserService {
  public model: UserModel;

  public tokenService: TokenService;
  
  constructor() {
    this.model = new UserModel(connection);
    this.tokenService = new TokenService();
  }

  public create = async (user: IUser): Promise<string | undefined> => {
    const { model, tokenService } = this;

    usersValidation(user);

    const result = await model.create(user);

    if (result) return tokenService.createToken(result);
  }; 
}