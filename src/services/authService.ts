import { ILogin } from '../interfaces';
import { connection, UserModel } from '../models';
import { validateBody, validateLogin } from '../validations';
import TokenService from './tokenService';

export default class AuthService {
  public model: UserModel;

  public tokenService: TokenService;
  
  constructor() {
    this.model = new UserModel(connection);
    this.tokenService = new TokenService();
  }

  public login = async (userInfo: ILogin): Promise<string | undefined> => {
    const { model, tokenService } = this;

    validateBody(userInfo);
    const [result] = await model.findUser(userInfo);
    
    validateLogin(result);
    return tokenService.createToken(result);
  }; 
}