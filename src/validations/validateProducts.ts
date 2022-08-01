import Joi from 'joi';
import { IProduct } from '../interfaces';

const validateBody = (product: IProduct) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  });

  const { error } = schema.validate(product);

  if (error && error.message.includes('required')) throw error;
  if (error) {
    const err = new Error(error.message);
    err.name = 'Unprocessable';
    throw err;
  } 
};

export default validateBody;