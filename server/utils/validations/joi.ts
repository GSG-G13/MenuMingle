import Joi from 'joi';

const signupSchema = Joi.object({
  roleId: Joi.number().required(),
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).required(),
});

const dishSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'any.required': `Dish not found or could not be updated`,
    'string.min': `name should have a minimum length of {#limit}`,
    'string.max': `name should have a maximum length of {#limit}`,
  }),
  price: Joi.number().required().messages({
    'any.required': `Dish not found or could not be updated`,
  }),
  image: Joi.string().min(3).required().messages({
    'any.required': `Dish not found or could not be updated`,
  }),
  availability: Joi.boolean().required(),
  ingredients: Joi.string().min(3).required(),
  categoryId: Joi.number().required(),
});

const loginSchema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(5).max(30).required(),
});

export { signupSchema, dishSchema, loginSchema };
