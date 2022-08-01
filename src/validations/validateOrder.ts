import Joi from 'joi';

const validateBody = (order: { productsIds: number[] }) => {
  const schema = Joi.object({
    productsIds: Joi.array().items(Joi.number()).min(1).required()
      .messages({
        'number.base': '"productsIds" must include only numbers',
        'array.min': '"productsIds" must include only numbers',
      }),
  });

  const { error } = schema.validate(order);

  if (error && error.message.includes('required')) throw error;
  if (error) {
    const err = new Error(error.message);
    err.name = 'Unprocessable';
    throw err;
  }
};

export default validateBody;