import Joi from 'joi';
import { IUser } from '../interfaces';

const validateBody = (user: IUser) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  });

  const { error } = schema.validate(user);

  if (error && error.message.includes('required')) throw error;
  if (error) {
    const err = new Error(error.message);
    err.name = 'Unprocessable';
    throw err;
  } 
};

export default validateBody;