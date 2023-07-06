import Joi from 'joi';

const signupSchema = Joi.object({
  roleId: Joi.number().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).required(),
});

const dishSchema = Joi.object({
  name: Joi.string().min(3).optional().max(30).messages({
    'any.required': `Dish not found or could not be updated`,
    'string.min': `name should have a minimum length of {#limit}`,
    'string.max': `name should have a maximum length of {#limit}`,
  }),
  price: Joi.number().optional().messages({
    'any.required': `Dish not found or could not be updated`,
  }),
  image: Joi.string().min(3).optional().messages({
    'any.required': `Dish not found or could not be updated`,
  }),
  availability: Joi.boolean().optional(),
  ingredients: Joi.string().optional(),
  category_id: Joi.number().optional(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).max(30).required(),
});
const cartSchema = Joi.object({
  orders: Joi.array().required(),
  customerId: Joi.string().required(),
  note: Joi.string().optional(),
});

export { signupSchema, dishSchema, loginSchema, cartSchema };
