import Joi from 'joi';
import { ILogin, IUser } from '../interfaces';

const validateBody = (userInfo: ILogin) => {
  const schema = Joi.object({
    username: Joi.string().empty().required(),
    password: Joi.string().empty().required(),
  });

  const { error } = schema.validate(userInfo);

  if (error) throw error;
};

const validateLogin = (result: IUser | undefined) => {
  console.log(result);
  if (!result) {
    const err = new Error('Username or password invalid');
    err.name = 'InvalidData';
    throw err;
  }
};

export {
  validateLogin,
  validateBody,
};